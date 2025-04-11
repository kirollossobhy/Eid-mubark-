document.getElementById('download-btn').addEventListener('click', function () {
    const userInput = document.getElementById('user-text').value.trim();
  
    if (!userInput) {
      alert('Please enter text before downloading the image.');
      return;
    }
  
    // Create a canvas to overlay text on the image
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = new Image();
  
    image.src = './images/sample-image.jpg'; // Path to your image
    image.onload = function () {
      // Set canvas dimensions to match the image
      canvas.width = image.width;
      canvas.height = image.height;
  
      // Draw the image on the canvas
      context.drawImage(image, 0, 0);
  
      // Set text properties
      context.font = '30px Arial';
      context.fillStyle = 'white';
      context.textAlign = 'center';
  
      // Add user text to the canvas
      context.fillText(userInput, canvas.width / 2, canvas.height - 50);
  
      // Trigger the download
      const link = document.createElement('a');
      link.download = 'eid-mubarak-custom.jpg';
      link.href = canvas.toDataURL('image/jpeg');
      link.click();
    };
  });

  


  console.log("KIRO SOBHY");
  
  