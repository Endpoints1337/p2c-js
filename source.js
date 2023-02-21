function downloadFile(url) {
  
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.setRequestHeader('User-Agent', 'P2C CRYPTO');
  xhr.responseType = 'blob';
  xhr.withCredentials = true;

  xhr.onload = function() {
    if (xhr.status === 200) {
      const url = window.URL.createObjectURL(xhr.response);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = 'file.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      console.error('Error: ' + xhr.status);
    }
  };

  xhr.send();
}

downloadFile('https://example.com/file.zip'); // change to your url / link
