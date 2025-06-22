import Image from 'next/image';
import styles from './BorderedImage.module.css';

interface BorderedImageProp {
  src: string,
  children?: any
}

const BorderedImage = ({ src, children }: BorderedImageProp) => {
  return (
    <div className={styles.frame}>
      <Image src={src} alt='Bordered image' className='object-cover'
        width={1920} height={1080} />
      {children}
    </div>
  )
}

export default BorderedImage;