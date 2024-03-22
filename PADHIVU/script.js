document.getElementById('fileInput').addEventListener('change', function(event)) {
    const file = event.target.files[0];
    const preview = document.getElementById('preview');
    preview.innerHTML = '';
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function(e) {
        const fileType = file.type.split('/')[0];
        if (fileType === 'image') {
          const img = document.createElement('img');
          img.src = e.target.result;
          preview.appendChild(img);
        } else if (fileType === 'video') {
          const video = document.createElement('video');
          video.src = e.target.result;
          video.controls = true;
          preview.appendChild(video);
        }
      }
    }
}