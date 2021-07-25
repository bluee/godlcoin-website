const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    lineHeight: '20px',
    marginTop: '5px',
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    color: 'white',
    fontSize: '13px',
    paddingRight: '10px',
    backgroundImage: 'linear-gradient( 45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
    backgroundSize: '40px 40px',
    animation: 'progress-animation 25s linear infinite',

  }

  return (
    completed !== 'NaN' && 
    <div style={containerStyles}>
      <div className="filler" style={fillerStyles}>
        <div style={labelStyles}>{`${completed}%`} for earnings</div>
      </div>
    </div>
  );
};

export default ProgressBar;