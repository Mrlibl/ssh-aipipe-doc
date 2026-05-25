// 全局图片预览工具 - 点击图片全屏放大
export function useImagePreview() {
  // 创建预览层
  function createPreviewLayer() {
    if (document.getElementById('img-preview-layer')) return;

    const div = document.createElement('div');
    div.id = 'img-preview-layer';
    div.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(200,200,200,0.5);
      z-index: 999999 !important;
      display: none;
      align-items: center;
      justify-content: center;
      cursor: zoom-out;
    `;

    const img = document.createElement('img');
    img.style.cssText = `
      max-width: 95%;
      max-height: 95%;
      border-radius: 8px;
      object-fit: contain;
    `;

    div.appendChild(img);
    document.body.appendChild(div);

    div.onclick = () => {
      div.style.display = 'none';
    };
  }

  // 全局打开图片
  window.openImg = function (src) {
    createPreviewLayer();
    const layer = document.getElementById('img-preview-layer');
    const img = layer.querySelector('img');
    img.src = src;
    layer.style.display = 'flex';
  };

  // 绑定 .doc-img 图片（已修复！）
  setTimeout(() => {
    document.body.addEventListener('click', (e) => {
      // 👇 这里改成 doc-img
      if (e.target && e.target.classList.contains('doc-img')) {
        window.openImg(e.target.src);
      }
    });
  }, 500);
}