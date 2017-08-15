const formData = new FormData()
const submit = document.querySelector('.submit')

submit.addEventListener('click', function () {
    const imgData = document.querySelector('.file')
    const xhr = new XMLHttpRequest()
    formData.append('upload', imgData.files[0])
    xhr.open('POST', 'http://localhost:3000/upload')
    xhr.send(formData)
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log('上传成功')
        }
    }
})