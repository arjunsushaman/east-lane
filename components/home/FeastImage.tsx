import Image from 'next/image'

export default function FeastImage() {
  return (
    <div
      className="w-full relative overflow-hidden"
      style={{ height: 'clamp(320px, 55vw, 680px)' }}
    >
      <Image
        src="/images/feast.jpg"
        alt="East Lane sharing plates spread"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
    </div>
  )
}
