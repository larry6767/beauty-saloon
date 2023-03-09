// import { iframeStyle } from './styles';
import Iframe from 'react-iframe'

export const Video = ({ url }: { url: string }) => {
  return (
    <Iframe
      // styles={iframeStyle}
      styles={{
        border: '20px solid white',
        padding: '0px',
      }}
      width="240"
      height="480"
      url={url}
      title="Youtube Player"
      allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
      position="relative"
    ></Iframe>
  )
}
