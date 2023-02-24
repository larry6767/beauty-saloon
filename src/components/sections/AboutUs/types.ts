export type MediaData = {
  data: {
    attributes: {
      alternativeText: string
      id: number
      url: string
    }
  }
}

export type AboutTextData = {
  data: {
    attributes: {
      firstButtonText: string
      heading: string
      secondButtonText: string
      text: string
      title: string
      videoPlayerText: string
    }
  }
}

export type AboutMediaData = {
  data: {
    attributes: {
      videoPlayerIcon: MediaData
      videoPreviewImage: MediaData
    }
  }
}
