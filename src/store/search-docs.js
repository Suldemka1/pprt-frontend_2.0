import { makeAutoObservable } from "mobx";

class SearchDocs {
  doc_title
  result = []

  constructor() {
    makeAutoObservable(this)
  }

  search(string) {
    this.query = string
  }

  setType(string) {
    this.type = string
  }

  fetchDocsByTypes(doc_type) {
    fetch(`${import.meta.env.PUBLIC_URL}/api/documents?populate=%2A&filters[document_types][title][$eq]=${doc_type}`)
        .then(response => response.json())
        .then(json => {
          this.result = JSON.parse(JSON.stringify(json.data))
        })
  }

  fetchDocs(doc_title) {
    fetch(`${import.meta.env.PUBLIC_URL}/api/documents?filters[title][$containsi]=${doc_title}&populate=*`)
      .then(response => response.json())
      .then(json => {
        this.result = JSON.parse(JSON.stringify(json.data))
      })
  }

  fetchDocsAll() {
    fetch(`${import.meta.env.PUBLIC_URL}/api/documents?populate=*`)
      .then(response => response.json())
      .then(json => {
        this.result = JSON.parse(JSON.stringify(json.data))
      })
  }
}

export default new SearchDocs