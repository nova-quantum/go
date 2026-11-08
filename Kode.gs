/**
 * Menangani permintaan akses web app utama
 */
function doGet(e) {
  var page = e.parameter.page || "home";
  var template;

  // Routing halaman berdasarkan parameter URL ?page=...
  switch (page) {
    case 'modul1':
      template = HtmlService.createTemplateFromFile('Modul_1');
      break;
    case 'modul2':
      template = HtmlService.createTemplateFromFile('Modul_2');
      break;
    case 'modul3':
      template = HtmlService.createTemplateFromFile('Modul_3');
      break;
    // Tambahkan case modul berikutnya di sini jika diperlukan
    default:
      template = HtmlService.createTemplateFromFile('Index');
      break;
  }

  return template.evaluate()
                .setTitle('Data Center - ' + CONFIG.APP_NAME)
                .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Fungsi untuk mengambil daftar modul yang dikonfigurasi secara manual
 */
function getModuleList() {
  return CONFIG.MODULES;
}
