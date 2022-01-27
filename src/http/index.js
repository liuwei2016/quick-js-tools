const loadDocumentByXHR =function (src) {
    if (src && typeof src === 'string') {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', src, true)
      xhr.withCredentials = true
      xhr.responseType = 'arraybuffer'
      xhr.onload = () => {
        if (
          xhr.response &&
          this.pdf &&
          typeof this.pdf.loadDocument === 'function'
        ) {
          this.pdf.loadDocument(xhr.response)
        }
      }
      xhr.onerror = () => {
      //   toast.closeLoading()
      }
      xhr.send()
    }
  }

const isNumber = value => /^\d{1,}$/g.test(value);
console.log(isNumber('123'));