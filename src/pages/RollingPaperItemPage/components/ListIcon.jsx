const ListIcon = ({ className, width = 18 }) => {
  return (
    <svg
      className={className}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      fill='#9935F'
    >
      <path d='M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z' />
    </svg>
  );
};

export default ListIcon;
