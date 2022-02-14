function Header() {
  return (
    <div className="container-fluid navbar navbar-expand-sm navbar-light bg-light justify-content-sm-center">
      <div>
        <div className="collapse navbar-collapse">
          <a className="navbar-brand" href="javascript:void(0)">
            Logo
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="text"
              size="50"
              placeholder="Search"
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </form>

          <ul className="navbar-nav ms-4">
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0)">
                로그인
              </a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse text-primary mt-1">
          경기도 의왕시 근처를 검색하고 있어요.
        </div>
      </div>
    </div>
  );
}

export default Header;
