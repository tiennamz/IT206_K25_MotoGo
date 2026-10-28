/**
 * MotoGo Presentation & Scrum Management App
 * IT-206 Quy trình phát triển phần mềm với Agile Scrum
 * Author: Đỗ Tiến Nam (B25DTCN117 - CNTT3)
 */

// ================= DATA STORE =================
const scrumData = {
  epics: [
    {
      id: 'EPIC-01',
      title: 'Tối ưu hóa trải nghiệm tìm kiếm & giữ chỗ xe máy tức thì cho du khách',
      businessValue: 'Giúp khách du lịch tra cứu xe nhanh trong 2 phút và giữ xe tức thì không lo hết xe vào dịp cao điểm tại Vũng Tàu & Đà Nẵng.',
      features: ['FEAT-01', 'FEAT-02'],
      tags: ['Khách Thuê', 'Đặt Giữ Chỗ']
    },
    {
      id: 'EPIC-02',
      title: 'Tối ưu vận hành & điều phối kho xe thông minh cho đối tác cửa hàng',
      businessValue: 'Giúp chủ cửa hàng kiểm soát 100% tình trạng kho xe, tự động chặn trùng lịch và nâng cao công suất khai thác kho xe.',
      features: ['FEAT-03', 'FEAT-04'],
      tags: ['Chủ Cửa Hàng', 'Kho Xe']
    },
    {
      id: 'EPIC-03',
      title: 'Minh bạch hóa quy trình giao nhận & bảo vệ quyền lợi tài sản hai bên',
      businessValue: 'Triệt tiêu tranh chấp hư hại trầy xước nhờ bằng chứng ảnh chụp 4 góc chuẩn mực và hợp đồng điện tử có hiệu lực.',
      features: ['FEAT-05', 'FEAT-06'],
      tags: ['Minh Bạch', 'Giao Nhận']
    }
  ],

  features: [
    {
      id: 'FEAT-01',
      epicId: 'EPIC-01',
      title: 'Tìm kiếm & Lọc xe đa tiêu chí',
      frCoverage: 'FR-01, FR-02',
      desc: 'Hỗ trợ lọc theo loại xe (tay ga, xe số, côn tay), phân khối và khung giờ nhận/trả tại Vũng Tàu & Đà Nẵng.'
    },
    {
      id: 'FEAT-02',
      epicId: 'EPIC-01',
      title: 'Đặt chỗ & Giữ xe thời gian thực 30 phút',
      frCoverage: 'FR-03, FR-04, BR-01',
      desc: 'Cơ chế khóa giữ xe chống đặt trùng trong 30 phút đếm ngược để khách hoàn tất thanh toán tiền cọc.'
    },
    {
      id: 'FEAT-03',
      epicId: 'EPIC-02',
      title: 'Quản lý trạng thái & Lịch biểu xe chống trùng',
      frCoverage: 'FR-05, FR-06, BR-02',
      desc: 'Tự động khóa lịch xe đã đặt kèm 2 giờ đệm vệ sinh/bảo trì và cập nhật trạng thái kho xe theo thời gian thực.'
    },
    {
      id: 'FEAT-04',
      epicId: 'EPIC-02',
      title: 'Xử lý & Phê duyệt đơn đặt tức thời',
      frCoverage: 'FR-07, FR-08',
      desc: 'Thông báo đẩy cho chủ cửa hàng và giao diện 1-chạm xác nhận hoặc từ chối kèm lý do rõ ràng.'
    },
    {
      id: 'FEAT-05',
      epicId: 'EPIC-03',
      title: 'Biên bản số hóa giao xe 4 góc ảnh',
      frCoverage: 'FR-09, FR-10, BR-03',
      desc: 'Ứng dụng chụp 4 góc xe, đánh dấu trầy xước có watermark GPS/thời gian và cho khách ký số điện tử.'
    },
    {
      id: 'FEAT-06',
      epicId: 'EPIC-03',
      title: 'Nghiệm thu hoàn trả & Quyết toán cọc',
      frCoverage: 'FR-11, FR-12, BR-04',
      desc: 'Đối chiếu ảnh trả xe với biên bản lúc nhận để hoàn cọc tự động qua cổng thanh toán trong 15 phút.'
    }
  ],

  stories: [
    {
      id: 'US-01',
      role: 'Khách thuê',
      roleType: 'customer',
      title: 'Tìm kiếm xe máy theo khung giờ và địa điểm',
      story: 'Là khách thuê, tôi muốn tìm kiếm xe theo khung giờ nhận/trả tại Vũng Tàu hoặc Đà Nẵng để chọn được chiếc xe phù hợp lịch trình chuyến đi.',
      trace: 'FR-01',
      priority: 'Should',
      sp: 3,
      parentFeature: 'FEAT-01: Tìm kiếm & Lọc xe đa tiêu chí',
      inSprint1: false,
      notes: 'Story chuẩn (Baseline) dùng để so sánh tương đối cho toàn bộ Backlog theo Fibonacci.',
      acList: [
        {
          title: 'AC-01 (Luồng chính)',
          type: 'main',
          spec: 'Given khách chọn ngày giờ và địa điểm Vũng Tàu hoặc Đà Nẵng, When bấm nút "Tìm xe", Then hệ thống hiển thị danh sách các xe còn trống thỏa mãn điều kiện.'
        }
      ]
    },
    {
      id: 'US-02',
      role: 'Khách thuê',
      roleType: 'customer',
      title: 'Giữ chỗ xe 30 phút trong lúc thanh toán cọc',
      story: 'Là khách thuê, tôi muốn giữ chỗ chiếc xe vừa chọn trong 30 phút để không bị người khác đặt mất trong lúc tôi hoàn tất thanh toán tiền cọc.',
      trace: 'FR-03, BR-01',
      priority: 'Must',
      sp: 5,
      parentFeature: 'FEAT-02: Đặt chỗ & Giữ xe thời gian thực',
      inSprint1: true,
      notes: 'Được chọn vào Sprint 1. Cần Redis Distributed Lock để giải quyết tranh chấp đồng thời và timer 30 phút.',
      acList: [
        {
          title: 'AC-01 (Luồng chính - BR-01)',
          type: 'main',
          spec: 'Given khách đã chọn xe còn trống và bấm đặt, When hệ thống tạo đơn thành công, Then xe được giữ chỗ 30 phút theo quy tắc BR-01 và không hiển thị cho khách khác.'
        },
        {
          title: 'AC-02 (Ngoại lệ - Quá hạn thanh toán)',
          type: 'alt',
          spec: 'Given đơn đang ở trạng thái chờ thanh toán cọc, When quá 30 phút mà khách chưa thanh toán, Then đơn tự động hủy và xe được mở lại trong kết quả tìm kiếm.'
        },
        {
          title: 'AC-03 (Ngoại lệ - Đặt trùng đồng thời)',
          type: 'alt',
          spec: 'Given 2 khách cùng bấm giữ 1 xe tại cùng 1 giây, When khách A hoàn tất request trước khách B, Then khách B nhận thông báo xe vừa được đặt và hệ thống gợi ý xe tương đương.'
        }
      ]
    },
    {
      id: 'US-03',
      role: 'Chủ cửa hàng',
      roleType: 'owner',
      title: 'Cập nhật trạng thái xe & chặn nhận lịch trùng',
      story: 'Là chủ cửa hàng, tôi muốn cập nhật trạng thái xe và chặn nhận lịch trùng để không xảy ra tình trạng thiếu xe giao cho khách đã đặt cọc.',
      trace: 'FR-05, BR-02',
      priority: 'Must',
      sp: 5,
      parentFeature: 'FEAT-03: Quản lý trạng thái & Lịch biểu xe',
      inSprint1: true,
      notes: 'Story cốt lõi giúp loại bỏ nỗi đau lớn nhất của chủ xe: trùng lịch giao xe cho khách.',
      acList: [
        {
          title: 'AC-01 (Luồng chính - BR-02)',
          type: 'main',
          spec: 'Given đơn thuê từ T1 đến T2 đã xác nhận, When hệ thống ghi nhận trạng thái đơn, Then lịch xe bị khóa từ T1 đến T2 kèm 2 giờ đệm vệ sinh theo quy tắc BR-02.'
        },
        {
          title: 'AC-02 (Ngoại lệ - Xe đột xuất bảo dưỡng)',
          type: 'alt',
          spec: 'Given xe bị sự cố cần đưa vào sửa chữa, When chủ xe đổi trạng thái thành "Bảo dưỡng", Then hệ thống chặn đặt lịch mới và cảnh báo các đơn tương lai bị ảnh hưởng.'
        },
        {
          title: 'AC-03 (Luồng kiểm tra tìm kiếm)',
          type: 'main',
          spec: 'Given khách tìm xe trong khoảng ngày trùng lịch xe đã khóa, When thực hiện tìm kiếm, Then chiếc xe đó không xuất hiện trong danh sách khả dụng.'
        }
      ]
    },
    {
      id: 'US-04',
      role: 'Chủ cửa hàng',
      roleType: 'owner',
      title: 'Tiếp nhận và xác nhận đơn đặt thuê xe tức thì',
      story: 'Là chủ cửa hàng, tôi muốn nhận thông báo và bấm xác nhận đơn đặt thuê xe tức thì để chủ động sắp xếp chuẩn bị xe bàn giao.',
      trace: 'FR-07',
      priority: 'Must',
      sp: 3,
      parentFeature: 'FEAT-04: Xử lý & Phê duyệt đơn đặt',
      inSprint1: true,
      notes: 'Độ phức tạp tương đương US-01 (3 SP), gồm push notification và cập nhật trạng thái đơn.',
      acList: [
        {
          title: 'AC-01 (Luồng chính)',
          type: 'main',
          spec: 'Given có đơn đặt xe mới thanh toán cọc thành công, When chủ xe mở ứng dụng và bấm "Xác nhận đơn", Then đơn chuyển sang trạng thái "Đã sẵn sàng giao" và gửi SMS cho khách.'
        }
      ]
    },
    {
      id: 'US-05',
      role: 'Nhân viên cửa hàng',
      roleType: 'staff',
      title: 'Chụp ảnh 4 góc xe và ghi nhận trầy xước lúc giao',
      story: 'Là nhân viên, tôi muốn chụp ảnh 4 góc xe và ghi nhận hiện trạng trầy xước vào biên bản số để làm bằng chứng pháp lý lúc giao xe.',
      trace: 'FR-09, BR-03',
      priority: 'Must',
      sp: 5,
      parentFeature: 'FEAT-05: Biên bản số hóa giao xe 4 góc ảnh',
      inSprint1: false,
      notes: 'Story thuộc Sprint 2 để hoàn thiện quy trình giao nhận xe trọn gói.',
      acList: [
        {
          title: 'AC-01 (Luồng chính - BR-03)',
          type: 'main',
          spec: 'Given nhân viên bàn giao xe cho khách, When chụp đủ 4 ảnh (đầu, đuôi, 2 sườn), Then biên bản số được tạo kèm watermark ngày giờ và tọa độ GPS theo chuẩn BR-03.'
        },
        {
          title: 'AC-02 (Ngoại lệ - Thiếu ảnh bắt buộc)',
          type: 'alt',
          spec: 'Given nhân viên đang lập biên bản, When mới tải lên 3 ảnh và bấm hoàn tất, Then hệ thống chặn lưu và báo lỗi yêu cầu chụp đủ 4 góc theo BR-03.'
        },
        {
          title: 'AC-03 (Ngoại lệ - Mất sóng mạng)',
          type: 'alt',
          spec: 'Given nhân viên chụp ảnh nơi sóng yếu, When bấm lưu biên bản, Then ảnh được lưu tạm vào bộ nhớ máy và tự động đồng bộ khi có kết nối trở lại.'
        }
      ]
    },
    {
      id: 'US-06',
      role: 'Khách thuê',
      roleType: 'customer',
      title: 'Ký xác nhận điện tử vào biên bản giao xe trên di động',
      story: 'Là khách thuê, tôi muốn ký xác nhận điện tử vào biên bản giao xe trên điện thoại để hợp đồng thuê xe có hiệu lực pháp lý minh bạch.',
      trace: 'FR-10',
      priority: 'Should',
      sp: 3,
      parentFeature: 'FEAT-05: Biên bản số hóa giao xe 4 góc ảnh',
      inSprint1: false,
      notes: 'Should Have: Có thể ký biên bản giấy tạm thời nếu tính năng ký số chưa sẵn sàng.',
      acList: [
        {
          title: 'AC-01 (Luồng chính)',
          type: 'main',
          spec: 'Given khách đã kiểm tra hiện trạng xe và ảnh chụp, When dùng ngón tay ký vào màn hình cảm ứng, Then chữ ký được mã hóa gắn vào biên bản PDF.'
        }
      ]
    },
    {
      id: 'US-07',
      role: 'Khách thuê',
      roleType: 'customer',
      title: 'Thanh toán tiền cọc thuê xe qua cổng thanh toán trực tuyến',
      story: 'Là khách thuê, tôi muốn thanh toán tiền cọc thuê xe qua cổng thanh toán trực tuyến (VNPAY/Momo/Thẻ) để hoàn tất giữ chỗ an toàn.',
      trace: 'FR-04',
      priority: 'Must',
      sp: 5,
      parentFeature: 'FEAT-02: Đặt chỗ & Giữ xe thời gian thực',
      inSprint1: true,
      notes: 'Tích hợp Webhook VNPAY/Momo, rủi ro giao dịch tài chính nên chấm 5 SP.',
      acList: [
        {
          title: 'AC-01 (Luồng chính)',
          type: 'main',
          spec: 'Given khách đang ở màn hình giữ chỗ 30 phút, When chọn thanh toán qua VNPAY và thanh toán thành công, Then hệ thống chuyển đơn sang trạng thái "Đã thanh toán cọc".'
        }
      ]
    },
    {
      id: 'US-08',
      role: 'Nhân viên cửa hàng',
      roleType: 'staff',
      title: 'Đối chiếu ảnh lúc trả xe và xác nhận hoàn cọc',
      story: 'Là nhân viên, tôi muốn đối chiếu ảnh lúc trả xe với biên bản lúc nhận để hoàn trả tiền cọc cho khách nhanh chóng không tranh cãi.',
      trace: 'FR-11, BR-04',
      priority: 'Should',
      sp: 3,
      parentFeature: 'FEAT-06: Nghiệm thu hoàn trả & Quyết toán cọc',
      inSprint1: false,
      notes: 'Should Have: Tránh tranh chấp hư hại lúc hoàn xe.',
      acList: [
        {
          title: 'AC-01 (Luồng chính)',
          type: 'main',
          spec: 'Given khách trả xe nguyên vẹn, When nhân viên bấm "Nghiệm thu đạt", Then hệ thống kích hoạt hoàn cọc 100% tự động qua cổng thanh toán trong 15 phút theo BR-04.'
        }
      ]
    },
    {
      id: 'US-09',
      role: 'Vận hành viên',
      roleType: 'admin',
      title: 'Xem báo cáo công suất lấp đầy kho xe theo khu vực',
      story: 'Là vận hành viên, tôi muốn xem báo cáo công suất lấp đầy xe theo khu vực để kịp thời mở rộng mạng lưới liên kết cửa hàng.',
      trace: 'FR-13',
      priority: 'Could',
      sp: 5,
      parentFeature: 'FEAT-03: Quản lý trạng thái & Lịch biểu kho xe',
      inSprint1: false,
      notes: 'Could Have: Báo cáo dashboard phân tích số liệu mở rộng kinh doanh.',
      acList: [
        {
          title: 'AC-01 (Luồng chính)',
          type: 'main',
          spec: 'Given vận hành viên đăng nhập hệ thống admin, When chọn khoảng thời gian, Then hệ thống biểu diễn tỷ lệ % lấp đầy xe tại Vũng Tàu và Đà Nẵng.'
        }
      ]
    },
    {
      id: 'US-10',
      role: 'Khách thuê',
      roleType: 'customer',
      title: 'Gợi ý lịch trình & cung đường phượt theo loại xe',
      story: 'Là khách thuê, tôi muốn xem gợi ý các cung đường phượt và điểm du lịch tương ứng với dòng xe để có trải nghiệm trọn vẹn.',
      trace: 'FR-14',
      priority: 'Won\'t',
      sp: 8,
      parentFeature: 'FEAT-01: Tìm kiếm & Lọc xe đa tiêu chí',
      inSprint1: false,
      notes: 'XẾP WON\'T CHO V1: Tính năng gia tăng giá trị ngoài phạm vi cốt lõi, phát triển ở Release 3.',
      acList: [
        {
          title: 'AC-01 (Luồng chính)',
          type: 'main',
          spec: 'Given khách thuê xe cào cào/côn tay, When mở tab khám phá, Then hiển thị cung đường phượt Hải Vân hoặc Đèo Nước Ngọt kèm mẹo lái xe an toàn.'
        }
      ]
    }
  ]
};

// ================= DOM ELEMENTS =================
const elements = {
  // Tabs
  tabBoard: document.getElementById('tabBoard'),
  tabPresentation: document.getElementById('tabPresentation'),
  tabDefense: document.getElementById('tabDefense'),
  tabSpec: document.getElementById('tabSpec'),
  views: {
    board: document.getElementById('viewBoard'),
    presentation: document.getElementById('viewPresentation'),
    defense: document.getElementById('viewDefense'),
    spec: document.getElementById('viewSpec')
  },
  
  // Trello Columns
  colEpic: document.getElementById('colEpic'),
  colFeature: document.getElementById('colFeature'),
  colBacklog: document.getElementById('colBacklog'),
  colSprint1: document.getElementById('colSprint1'),

  // Filters & Search
  filterPills: document.querySelectorAll('.filter-pill'),
  searchInput: document.getElementById('searchInput'),
  btnQuickExport: document.getElementById('btnQuickExport'),
  toast: document.getElementById('toast'),

  // Modal
  modalBackdrop: document.getElementById('cardModalBackdrop'),
  btnModalClose: document.getElementById('btnModalClose'),
  btnModalClose2: document.getElementById('btnModalClose2'),
  modalCardTitle: document.getElementById('modalCardTitle'),
  modalStoryText: document.getElementById('modalStoryText'),
  modalTraceability: document.getElementById('modalTraceability'),
  modalPriority: document.getElementById('modalPriority'),
  modalStoryPoint: document.getElementById('modalStoryPoint'),
  modalParentFeature: document.getElementById('modalParentFeature'),
  modalAcList: document.getElementById('modalAcList'),
  modalNotes: document.getElementById('modalNotes'),
  modalTagRow: document.getElementById('modalTagRow'),

  // Slides
  slides: document.querySelectorAll('.slide'),
  currentSlideNum: document.getElementById('currentSlideNum'),
  totalSlidesNum: document.getElementById('totalSlidesNum'),
  slideCategoryName: document.getElementById('slideCategoryName'),
  slideThumbNav: document.getElementById('slideThumbNav'),
  btnPrevSlide: document.getElementById('btnPrevSlide'),
  btnNextSlide: document.getElementById('btnNextSlide'),
  slideIndicator: document.getElementById('slideIndicator'),
  btnFullscreen: document.getElementById('btnFullscreen'),

  // Defense Tabs
  roleTabBtns: document.querySelectorAll('.role-tab-btn'),
  roleQAPanels: {
    po: document.getElementById('qaPO'),
    sm: document.getElementById('qaSM'),
    dev: document.getElementById('qaDEV')
  }
};

let currentFilter = 'all';
let currentSearch = '';
let currentSlideIndex = 0;
const totalSlides = elements.slides.length;

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  renderTrelloColumns();
  setupViewSwitcher();
  setupFilterAndSearch();
  setupModal();
  setupPresentationDeck();
  setupDefenseTabs();
  setupExport();
});

// ================= RENDER TRELLO COLUMNS =================
function renderTrelloColumns() {
  // 1. Render Epic Column
  elements.colEpic.innerHTML = '';
  scrumData.epics.forEach(epic => {
    const card = document.createElement('div');
    card.className = 'trello-card';
    card.innerHTML = `
      <div class="card-labels">
        <span class="card-label label-epic"><i class="fa-solid fa-cubes"></i> Epic</span>
      </div>
      <div class="card-title">
        <span class="card-code">${epic.id}:</span>${epic.title}
      </div>
      <div style="font-size: 0.78rem; color: #5e6c84; margin-bottom: 8px; line-height: 1.35;">
        ${epic.businessValue}
      </div>
      <div class="card-footer">
        <div class="card-meta-left">
          <span class="meta-trace">${epic.features.length} Features</span>
        </div>
        <div class="card-member" title="Product Owner">PO</div>
      </div>
    `;
    card.addEventListener('click', () => showEpicDetail(epic));
    elements.colEpic.appendChild(card);
  });

  // 2. Render Feature Column
  elements.colFeature.innerHTML = '';
  scrumData.features.forEach(feat => {
    const card = document.createElement('div');
    card.className = 'trello-card';
    card.innerHTML = `
      <div class="card-labels">
        <span class="card-label label-feature"><i class="fa-solid fa-layer-group"></i> Feature</span>
        <span class="card-label" style="background:#f3e8ff; color:#6b21a8;">${feat.epicId}</span>
      </div>
      <div class="card-title">
        <span class="card-code">${feat.id}:</span>${feat.title}
      </div>
      <div style="font-size: 0.78rem; color: #5e6c84; margin-bottom: 8px;">
        ${feat.desc}
      </div>
      <div class="card-footer">
        <div class="card-meta-left">
          <span class="meta-trace"><i class="fa-solid fa-shield"></i> ${feat.frCoverage}</span>
        </div>
        <div class="card-member" title="Lead Dev">DEV</div>
      </div>
    `;
    card.addEventListener('click', () => showFeatureDetail(feat));
    elements.colFeature.appendChild(card);
  });

  // 3. Render Product Backlog (All filtered stories)
  renderStoriesColumn(elements.colBacklog, scrumData.stories, false);

  // 4. Render Sprint 1 Backlog (Selected stories in Sprint 1)
  const sprint1Stories = scrumData.stories.filter(s => s.inSprint1);
  renderStoriesColumn(elements.colSprint1, sprint1Stories, true);
}

function renderStoriesColumn(container, list, isSprintCol) {
  container.innerHTML = '';
  
  // Filter stories
  let filtered = list.filter(item => {
    const matchFilter = currentFilter === 'all' || item.priority === currentFilter;
    const q = currentSearch.toLowerCase().trim();
    const matchSearch = !q || 
      item.id.toLowerCase().includes(q) || 
      item.title.toLowerCase().includes(q) || 
      item.story.toLowerCase().includes(q) || 
      item.trace.toLowerCase().includes(q) || 
      item.role.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 24px 10px; color: #5e6c84; font-size: 0.82rem;">
        <i class="fa-regular fa-folder-open" style="font-size: 1.5rem; margin-bottom: 6px; display:block;"></i>
        Không có Story phù hợp bộ lọc
      </div>
    `;
    return;
  }

  filtered.forEach(story => {
    const card = document.createElement('div');
    card.className = 'trello-card';
    
    // Priority class
    let pClass = 'label-must';
    if (story.priority === 'Should') pClass = 'label-should';
    if (story.priority === 'Could') pClass = 'label-could';
    if (story.priority === "Won't") pClass = 'label-wont';

    card.innerHTML = `
      <div class="card-labels">
        <span class="card-label ${pClass}">${story.priority}</span>
        <span class="card-label" style="background:#e0f2fe; color:#0369a1;">${story.role}</span>
        ${story.inSprint1 ? '<span class="card-label" style="background:#e3fcef; color:#006644;"><i class="fa-solid fa-check"></i> Sprint 1</span>' : ''}
      </div>
      <div class="card-title">
        <span class="card-code">${story.id}:</span>${story.story}
      </div>
      <div class="card-footer">
        <div class="card-meta-left">
          <span class="meta-trace"><i class="fa-solid fa-link"></i> ${story.trace}</span>
          <span class="meta-sp ${story.sp >= 5 ? 'sp-high' : ''}"><i class="fa-solid fa-bolt"></i> ${story.sp} SP</span>
          ${story.acList && story.acList.length > 1 ? `<span class="meta-trace" title="Có Acceptance Criteria"><i class="fa-solid fa-list-check"></i> ${story.acList.length} AC</span>` : ''}
        </div>
        <div class="card-member" title="${story.role}">${story.id.replace('US-', '')}</div>
      </div>
    `;

    card.addEventListener('click', () => showStoryModal(story));
    container.appendChild(card);
  });
}

// ================= MODAL CONTROLLER =================
function showStoryModal(story) {
  let pClass = 'label-must';
  if (story.priority === 'Should') pClass = 'label-should';
  if (story.priority === 'Could') pClass = 'label-could';
  if (story.priority === "Won't") pClass = 'label-wont';

  elements.modalTagRow.innerHTML = `
    <span class="card-label ${pClass}">${story.priority} Have</span>
    <span class="card-label label-feature">${story.role}</span>
    <span class="card-label" style="background:#ebecf0; color:#172b4d;">${story.sp} Story Point</span>
    ${story.inSprint1 ? '<span class="card-label" style="background:#e3fcef; color:#006644;"><i class="fa-solid fa-check"></i> Chọn vào Sprint 1</span>' : ''}
  `;

  elements.modalCardTitle.innerHTML = `<span class="badge-code" style="font-size: 1.1rem; margin-right: 8px;">${story.id}</span> ${story.title}`;
  elements.modalStoryText.innerText = story.story;
  elements.modalTraceability.innerHTML = `<code>${story.trace}</code>`;
  elements.modalPriority.innerHTML = `<span class="moscow-badge tag-${story.priority.toLowerCase().replace("'", '')}">${story.priority}</span> (Tuân thủ MoSCoW)`;
  elements.modalStoryPoint.innerHTML = `<strong>${story.sp} Story Point</strong> (Dựa trên so sánh tương đối với US-01)`;
  elements.modalParentFeature.innerText = story.parentFeature;
  elements.modalNotes.innerText = story.notes || 'Đầy đủ thông số hợp lệ.';

  // Render AC
  if (story.acList && story.acList.length > 0) {
    elements.modalAcList.innerHTML = story.acList.map(ac => `
      <div class="ac-modal-item ${ac.type === 'alt' ? 'alt' : ''}">
        <div class="ac-modal-title">${ac.title}</div>
        <div class="ac-modal-spec">${ac.spec}</div>
      </div>
    `).join('');
  } else {
    elements.modalAcList.innerHTML = `<p style="font-size:0.85rem; color:#5e6c84;">(Tiêu chí Acceptance Criteria chi tiết nằm trên Trello backlog)</p>`;
  }

  elements.modalBackdrop.classList.add('active');
}

function showEpicDetail(epic) {
  elements.modalTagRow.innerHTML = `<span class="card-label label-epic">EPIC</span>`;
  elements.modalCardTitle.innerText = `${epic.id}: ${epic.title}`;
  elements.modalStoryText.innerText = epic.businessValue;
  elements.modalTraceability.innerText = `Bao phủ các Features: ${epic.features.join(', ')}`;
  elements.modalPriority.innerText = `Cấp độ: Giá trị nghiệp vụ cao nhất`;
  elements.modalStoryPoint.innerText = `N/A (Cấp độ Epic)`;
  elements.modalParentFeature.innerText = `MotoGo Core Platform`;
  elements.modalAcList.innerHTML = `<p style="font-size:0.85rem; color:#5e6c84;">Epic bao gồm các Features phân rã bên dưới.</p>`;
  elements.modalNotes.innerText = `Được thiết kế hướng giá trị người dùng, không đặt tên theo module kỹ thuật.`;
  elements.modalBackdrop.classList.add('active');
}

function showFeatureDetail(feat) {
  elements.modalTagRow.innerHTML = `<span class="card-label label-feature">FEATURE</span>`;
  elements.modalCardTitle.innerText = `${feat.id}: ${feat.title}`;
  elements.modalStoryText.innerText = feat.desc;
  elements.modalTraceability.innerHTML = `Bao phủ mã yêu cầu SRS: <code>${feat.frCoverage}</code>`;
  elements.modalPriority.innerText = `Trực thuộc: ${feat.epicId}`;
  elements.modalStoryPoint.innerText = `N/A (Cấp độ Feature)`;
  elements.modalParentFeature.innerText = feat.epicId;
  elements.modalAcList.innerHTML = `<p style="font-size:0.85rem; color:#5e6c84;">Feature chứa các User Story con trong Product Backlog.</p>`;
  elements.modalNotes.innerText = `Mỗi thẻ User Story con sẽ ghi mã Feature cha này trong phần mô tả.`;
  elements.modalBackdrop.classList.add('active');
}

function setupModal() {
  const closeModal = () => elements.modalBackdrop.classList.remove('active');
  elements.btnModalClose.addEventListener('click', closeModal);
  elements.btnModalClose2.addEventListener('click', closeModal);
  elements.modalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.modalBackdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

// ================= VIEW SWITCHER =================
function setupViewSwitcher() {
  const tabs = [
    { btn: elements.tabBoard, view: elements.views.board },
    { btn: elements.tabPresentation, view: elements.views.presentation },
    { btn: elements.tabDefense, view: elements.views.defense },
    { btn: elements.tabSpec, view: elements.views.spec }
  ];

  tabs.forEach(tab => {
    tab.btn.addEventListener('click', () => {
      tabs.forEach(t => {
        t.btn.classList.remove('active');
        t.view.classList.remove('active');
      });
      tab.btn.classList.add('active');
      tab.view.classList.add('active');
    });
  });
}

// ================= FILTER & SEARCH =================
function setupFilterAndSearch() {
  elements.filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      elements.filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter = pill.getAttribute('data-filter');
      renderTrelloColumns();
    });
  });

  elements.searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderTrelloColumns();
  });
}

// ================= PRESENTATION DECK CONTROLLER =================
function setupPresentationDeck() {
  // Build slide quick nav dots
  elements.slideThumbNav.innerHTML = '';
  elements.slides.forEach((slide, idx) => {
    const dot = document.createElement('div');
    dot.className = `slide-dot ${idx === 0 ? 'active' : ''}`;
    dot.title = `Chuyển tới Slide ${idx + 1}: ${slide.getAttribute('data-cat')}`;
    dot.addEventListener('click', () => goToSlide(idx));
    elements.slideThumbNav.appendChild(dot);
  });

  elements.totalSlidesNum.innerText = totalSlides;

  // Next / Prev buttons
  elements.btnPrevSlide.addEventListener('click', prevSlide);
  elements.btnNextSlide.addEventListener('click', nextSlide);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!elements.views.presentation.classList.contains('active')) return;
    if (elements.modalBackdrop.classList.contains('active')) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToSlide(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToSlide(totalSlides - 1);
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    }
  });

  // Fullscreen button & change listeners
  elements.btnFullscreen.addEventListener('click', toggleFullscreen);
  ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(evt => {
    document.addEventListener(evt, updateFullscreenState);
  });

  updateSlideView();
}

function goToSlide(index) {
  if (index < 0 || index >= totalSlides) return;
  
  elements.slides.forEach((slide, i) => {
    slide.classList.remove('active', 'prev');
    if (i < index) {
      slide.classList.add('prev');
    } else if (i === index) {
      slide.classList.add('active');
    }
  });

  currentSlideIndex = index;
  updateSlideView();
}

function nextSlide() {
  if (currentSlideIndex < totalSlides - 1) {
    goToSlide(currentSlideIndex + 1);
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    goToSlide(currentSlideIndex - 1);
  }
}

function updateSlideView() {
  const currentSlide = elements.slides[currentSlideIndex];
  const catName = currentSlide.getAttribute('data-cat') || 'Thuyết Trình';
  
  elements.currentSlideNum.innerText = currentSlideIndex + 1;
  elements.slideCategoryName.innerText = catName;
  elements.slideIndicator.innerText = `Slide ${currentSlideIndex + 1} / ${totalSlides}`;

  // Update dots
  const dots = elements.slideThumbNav.querySelectorAll('.slide-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlideIndex);
  });

  // Update button states
  elements.btnPrevSlide.disabled = currentSlideIndex === 0;
  elements.btnNextSlide.innerHTML = currentSlideIndex === totalSlides - 1 ? 
    'Hoàn Thành <i class="fa-solid fa-check"></i>' : 
    'Slide Tiếp Theo <i class="fa-solid fa-chevron-right"></i>';
}

function isFullscreen() {
  return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
}

function updateFullscreenState() {
  const inFs = isFullscreen();
  document.body.classList.toggle('in-fullscreen', inFs);
  
  if (inFs) {
    elements.btnFullscreen.innerHTML = '<i class="fa-solid fa-compress"></i> Thu nhỏ';
    elements.btnFullscreen.title = 'Thu nhỏ / Thoát toàn màn hình (F hoặc Esc)';
    elements.btnFullscreen.classList.add('btn-fullscreen-active');
  } else {
    elements.btnFullscreen.innerHTML = '<i class="fa-solid fa-expand"></i> Phóng to';
    elements.btnFullscreen.title = 'Toàn màn hình (F)';
    elements.btnFullscreen.classList.remove('btn-fullscreen-active');
  }
}

function toggleFullscreen() {
  if (!isFullscreen()) {
    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen().catch(err => {
        console.log('Error attempting to enable fullscreen:', err);
      });
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(err => {
        console.log('Error attempting to exit fullscreen:', err);
      });
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

// ================= DEFENSE HUB CONTROLLER =================
function setupDefenseTabs() {
  elements.roleTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.roleTabBtns.forEach(b => b.classList.remove('active'));
      Object.values(elements.roleQAPanels).forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const role = btn.getAttribute('data-role');
      if (elements.roleQAPanels[role]) {
        elements.roleQAPanels[role].classList.add('active');
      }
    });
  });

  // Accordion click-to-reveal for Q&A items
  const qaItems = document.querySelectorAll('.qa-item');
  qaItems.forEach(item => {
    const questionHeader = item.querySelector('.qa-question');
    if (questionHeader) {
      questionHeader.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = item.classList.toggle('open');
        const hint = item.querySelector('.qa-toggle-hint');
        if (hint) {
          hint.innerHTML = isOpen ? 
            '<i class="fa-regular fa-eye-slash"></i> Thu gọn' : 
            '<i class="fa-regular fa-eye"></i> Xem câu trả lời';
        }
      });
    }
  });

  // Toggle All button
  const btnToggleAll = document.getElementById('btnToggleAllQA');
  const toggleAllText = document.getElementById('toggleAllText');
  if (btnToggleAll) {
    let allExpanded = false;
    btnToggleAll.addEventListener('click', () => {
      allExpanded = !allExpanded;
      const activePanel = document.querySelector('.role-qa-panel.active');
      const currentItems = activePanel ? activePanel.querySelectorAll('.qa-item') : qaItems;

      currentItems.forEach(item => {
        item.classList.toggle('open', allExpanded);
        const hint = item.querySelector('.qa-toggle-hint');
        if (hint) {
          hint.innerHTML = allExpanded ? 
            '<i class="fa-regular fa-eye-slash"></i> Thu gọn' : 
            '<i class="fa-regular fa-eye"></i> Xem câu trả lời';
        }
      });

      if (toggleAllText) {
        toggleAllText.innerText = allExpanded ? 'Thu gọn tất cả' : 'Mở tất cả';
      }
    });
  }
}

// ================= EXPORT & TOAST =================
function setupExport() {
  elements.btnQuickExport.addEventListener('click', () => {
    const reportText = generateMarkdownReport();
    navigator.clipboard.writeText(reportText).then(() => {
      showToast('Đã copy toàn bộ nội dung Báo Cáo 8 Hạng Mục vào Clipboard!');
    }).catch(() => {
      showToast('Đã xuất báo cáo!');
    });
  });
}

function showToast(msg) {
  elements.toast.innerText = msg;
  elements.toast.classList.add('show');
  setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 3500);
}

function generateMarkdownReport() {
  return `# BÁO CÁO MINI PROJECT AGIL SCRUM: DỰ ÁN MOTOGO
Sinh viên: Đỗ Tiến Nam | MSSV: B25DTCN117 | Lớp: CNTT3
Bảng Trello: MotoGo – Đỗ Tiến Nam – CNTT3 (Công khai)

## HẠNG MỤC 1: PHÂN RÃ EPIC - FEATURE
- EPIC-01: Tối ưu hóa trải nghiệm tìm kiếm và giữ chỗ xe máy tức thì cho du khách (FR-01, FR-02, FR-03, FR-04, BR-01)
  * FEAT-01: Tìm kiếm & Lọc xe đa tiêu chí (FR-01, FR-02)
  * FEAT-02: Đặt chỗ & Giữ xe thời gian thực 30 phút (FR-03, FR-04, BR-01)
- EPIC-02: Tối ưu vận hành và điều phối kho xe thông minh cho đối tác cửa hàng (FR-05, FR-06, FR-07, FR-08, BR-02)
  * FEAT-03: Quản lý trạng thái & Lịch biểu xe chống trùng (FR-05, FR-06, BR-02)
  * FEAT-04: Xử lý & Phê duyệt đơn đặt tức thời (FR-07, FR-08)
- EPIC-03: Minh bạch hóa quy trình giao nhận và bảo vệ quyền lợi tài sản hai bên (FR-09, FR-10, FR-11, FR-12, BR-03, BR-04)
  * FEAT-05: Biên bản số hóa giao xe 4 góc ảnh (FR-09, FR-10, BR-03)
  * FEAT-06: Nghiệm thu hoàn trả & Quyết toán cọc (FR-11, FR-12, BR-04)

## HẠNG MỤC 2: DANH SÁCH 10 USER STORY
1. US-01: Là khách thuê, tôi muốn tìm kiếm xe theo khung giờ nhận/trả tại Vũng Tàu hoặc Đà Nẵng để chọn xe phù hợp lịch trình. (FR-01 | Should | 3 SP)
2. US-02: Là khách thuê, tôi muốn giữ chỗ chiếc xe vừa chọn trong 30 phút để không bị người khác đặt mất trong lúc tôi thanh toán cọc. (FR-03, BR-01 | Must | 5 SP)
3. US-03: Là chủ cửa hàng, tôi muốn cập nhật trạng thái xe và chặn nhận lịch trùng để không xảy ra tình trạng thiếu xe giao cho khách. (FR-05, BR-02 | Must | 5 SP)
4. US-04: Là chủ cửa hàng, tôi muốn nhận thông báo và bấm xác nhận đơn đặt thuê xe tức thì để chủ động sắp xếp chuẩn bị xe. (FR-07 | Must | 3 SP)
5. US-05: Là nhân viên, tôi muốn chụp ảnh 4 góc xe và ghi nhận trầy xước vào biên bản số để làm bằng chứng lúc giao xe. (FR-09, BR-03 | Must | 5 SP)
6. US-06: Là khách thuê, tôi muốn ký xác nhận điện tử vào biên bản trên điện thoại để hợp đồng thuê xe có hiệu lực minh bạch. (FR-10 | Should | 3 SP)
7. US-07: Là khách thuê, tôi muốn thanh toán tiền cọc thuê xe qua cổng thanh toán trực tuyến để hoàn tất giữ chỗ an toàn. (FR-04 | Must | 5 SP)
8. US-08: Là nhân viên, tôi muốn đối chiếu ảnh lúc trả xe với biên bản lúc nhận để hoàn cọc cho khách nhanh chóng không tranh cãi. (FR-11, BR-04 | Should | 3 SP)
9. US-09: Là vận hành viên, tôi muốn xem báo cáo công suất lấp đầy xe theo khu vực để kịp thời mở rộng mạng lưới liên kết cửa hàng. (FR-13 | Could | 5 SP)
10. US-10: Là khách thuê, tôi muốn xem gợi ý các cung đường phượt và điểm du lịch tương ứng với dòng xe để có trải nghiệm trọn vẹn. (FR-14 | Won't | 8 SP)

## HẠNG MỤC 3: ĐÁNH GIÁ INVEST & REFACTORING
- Đánh giá US-02, US-05, US-X lỗi.
- Bản trước: Gộp tìm kiếm, giữ chỗ, thanh toán, bản đồ (vi phạm I, S).
- Bản sau: US-02 tập trung giữ chỗ 30 phút, đạt 6/6 tiêu chí INVEST.

## HẠNG MỤC 4: ACCEPTANCE CRITERIA
- US-02, US-03, US-05 (3 Story Must cao nhất) với đầy đủ luồng chính, ngoại lệ và tham chiếu BR-01, BR-02, BR-03.

## HẠNG MỤC 5: DEFINITION OF DONE (DoD)
1. Peer Code Review không còn lỗi tĩnh.
2. Unit Test Coverage >= 80% PASS.
3. Acceptance Criteria Passed on Staging.
4. Zero Blocker Bugs & Staging Deployed.
5. Cập nhật tài liệu API Swagger.

## HẠNG MỤC 6: MOSCOW PRIORITIZATION
- Must: 5 (50%), Should: 3 (30%), Could: 1 (10%), Won't: 1 (10%).

## HẠNG MỤC 7: ƯỚC LƯỢNG STORY POINT
- Chuẩn US-01 = 3 SP. Tách story 21 SP thành US-05 (5 SP), US-06 (3 SP), US-08 (3 SP).

## HẠNG MỤC 8: KẾ HOẠCH SPRINT 1
- Sprint Goal: Đặt giữ chỗ & chống trùng lịch xe tại Vũng Tàu và Đà Nẵng.
- Capacity: 3 Devs x 10 ngày x 6h - 20% buffer = 144 giờ hiệu dụng.
- Sprint Backlog: US-02, US-03, US-04, US-07 (18 SP = Velocity 18 SP).
- Task Breakdown US-02: 5 task kỹ thuật = 36 giờ.`;
}
