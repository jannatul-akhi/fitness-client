/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Card(props) {
  const { variant, extra, children, ...rest } = props;
  return (
    <div
      className={`!z-5 relative flex flex-col rounded-[20px] bg-orange-950 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-purple-700 dark:text-white dark:shadow-none ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
