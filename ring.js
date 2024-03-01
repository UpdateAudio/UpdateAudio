 
    function startCountdown(buttonElement, downloadLinkContainer) {
        let seconds = 10;
        const countdownInterval = setInterval(function () {
            buttonElement.innerText = `Please Wait: ${seconds} seconds`;
            seconds--;

            if (seconds < 0) {
                clearInterval(countdownInterval);
                buttonElement.style.display = 'none';
                downloadLinkContainer.style.display = 'block';
            }
        }, 1000);
    }
    function downloadFile(fileUrl, fileName) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', fileUrl, true);
        xhr.responseType = 'blob';

        xhr.onload = function () {
            var blob = new Blob([xhr.response], { type: 'audio/mpeg' });

            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        xhr.send();
    }
    function handleDownloadButtonClick(buttonElement, downloadLinkContainer, fileUrl, fileName) {
        startCountdown(buttonElement, downloadLinkContainer);
    }
    function handleCongratulationsClick(downloadLinkContainer, fileUrl, fileName) {
        downloadFile(fileUrl, fileName);
    }
