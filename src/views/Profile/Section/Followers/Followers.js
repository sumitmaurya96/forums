const Followers = (props) => {
  const { followers } = props;

  return (
    <div className="row" style={{ width: "100%" }}>
      {followers.map((val, ind) => {
        return (
          <div className="card bg-warning col-md-3 m-3" key={ind}>
            <img
              src="https://www.plannthat.com/wp-content/uploads/2017/06/Facebook-Post-3.jpg"
              className="card-img-top"
              alt="Child"
            />
            <div className="card-body">
              <a href="#" className="card-title">
                @{val.username}
              </a>
              <h5 className="card-title">
                {val.firstname} {val.lastname}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Followers;
