import type { MediaData } from 'src/types'

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
