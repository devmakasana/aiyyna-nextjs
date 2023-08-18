/* eslint-disable no-duplicate-case */
/* eslint-disable max-len */
const getViewBox = (name: string) => {
  switch (name) {
    default:
      return '0 0 24 24';
  }
};

const getPath = (name: string, props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { fill, stroke } = props;
  switch (name) {
    case 'close-icon':
      return (
        <>
          <path
            d='M20 20L4 4M20 4L4 20'
            stroke='#1C132D'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </>
      );

    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = '',
  style = {},
  fill = '',
  viewBox = '',
  height = '24',
  width = '24',
  className = '',
  strokeWidth = 1,
  bgfill = 'none',
  stroke = ''
}) => (
  <svg
    stroke={stroke}
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink='http://www.w3.org/1999/xlink'>
    {getPath(name, { fill, strokeWidth, bgfill, stroke })}{' '}
  </svg>
);

export default SVGIcon;
