import os
import zipfile
import xml.etree.ElementTree as ET

def extract():
    src = r"c:\Users\ghast\OneDrive\Tài liệu\[IT-206-K25] Quy trình phát triển phần mềm với AgileScrum\MiniProject\mini_project.docx"
    dst = r"c:\Users\ghast\OneDrive\Tài liệu\[IT-206-K25] Quy trình phát triển phần mềm với AgileScrum\MiniProject\extracted_content.txt"
    
    # Try reading with msvcrt / open
    # On Windows, python open() with share can be done via os.open or ctypes if locked
    import ctypes
    from ctypes import wintypes
    
    # Win32 API to open with FILE_SHARE_READ | FILE_SHARE_WRITE
    GENERIC_READ = 0x80000000
    FILE_SHARE_READ = 0x00000001
    FILE_SHARE_WRITE = 0x00000002
    FILE_SHARE_DELETE = 0x00000004
    OPEN_EXISTING = 3
    FILE_ATTRIBUTE_NORMAL = 0x80
    
    CreateFileW = ctypes.windll.kernel32.CreateFileW
    CreateFileW.argtypes = [wintypes.LPCWSTR, wintypes.DWORD, wintypes.DWORD, ctypes.c_void_p, wintypes.DWORD, wintypes.DWORD, wintypes.HANDLE]
    CreateFileW.restype = wintypes.HANDLE
    
    ReadFile = ctypes.windll.kernel32.ReadFile
    CloseHandle = ctypes.windll.kernel32.CloseHandle
    GetFileSizeEx = ctypes.windll.kernel32.GetFileSizeEx
    
    handle = CreateFileW(src, GENERIC_READ, FILE_SHARE_READ | FILE_SHARE_WRITE | FILE_SHARE_DELETE, None, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, None)
    if handle == wintypes.HANDLE(-1).value or handle == -1:
        print("Failed to open file with Win32 API:", ctypes.GetLastError())
        # Try read only without generic read?
        # In Win32, 0 as dwDesiredAccess allows querying without read/write access, but to read we need GENERIC_READ.
        # Let's try opening via powershell script file.
        return

    import io
    size = ctypes.c_int64()
    GetFileSizeEx(handle, ctypes.byref(size))
    total_size = size.value
    print(f"File size: {total_size} bytes")

    buf = ctypes.create_string_buffer(total_size)
    bytes_read = wintypes.DWORD()
    ReadFile(handle, buf, total_size, ctypes.byref(bytes_read), None)
    CloseHandle(handle)

    data = bytes(buf.raw[:bytes_read.value])
    
    # Parse zip from memory
    bio = io.BytesIO(data)
    with zipfile.ZipFile(bio) as z:
        for name in z.namelist():
            print("Zip entry:", name)
        xml_content = z.read('word/document.xml')

    root = ET.fromstring(xml_content)
    
    # Extract structure
    lines = []
    # XML namespace
    w = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
    
    for elem in root.iter():
        if elem.tag == f'{w}p':
            texts = [node.text for node in elem.iter(f'{w}t') if node.text]
            if texts:
                lines.append(''.join(texts))
        elif elem.tag == f'{w}tr':
            cells = []
            for cell in elem.iter(f'{w}tc'):
                cell_texts = [node.text for node in cell.iter(f'{w}t') if node.text]
                cells.append(' '.join(cell_texts).strip())
            if any(cells):
                lines.append(" | ".join(cells))

    with open(dst, "w", encoding="utf-8") as out:
        out.write("\n".join(lines))
    print(f"Successfully extracted {len(lines)} lines to {dst}")

if __name__ == '__main__':
    extract()
