import detailPage from "../css/detailPage.css";

function DetailPage() {
  return (
    <div>
      <div className="container d-flex justify-content-center bg-light mt-5 ">
        <div className="d-flex flex-column">
          <div
            id="demo"
            className="carousel slide "
            data-bs-ride="carousel"
            style={{ maxWidth: "700px" }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="0"
                className="active"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="2"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="img/나이키신발1.png"
                  width="700px"
                  alt="nikeShoes1"
                  className="d-block "
                />
              </div>
              <div className="carousel-item">
                <img
                  src="img/나이키신발2.png"
                  width="700px"
                  alt="nikeShoes2"
                  className="d-block "
                />
              </div>

              <div className="carousel-item">
                <img
                  src="img/나이키신발3.png"
                  width="700px"
                  alt="nikeShoes3"
                  className="d-block "
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>

          <div className="text-center">남은시간 : xxxx</div>
          <div className="mt-4">판매자 이름</div>
          <div>판매자 동내 이름</div>
          <div className="mt-4">이케아 트롤리 팔아요</div>
          <div className="mt-4">경기도 의왕시 오전동</div>

          <div className="mt-4">
            제품 상세 정보들--------------------------------------
          </div>
          <div>제품 상세 정보들--------------------------------------</div>
          <div>제품 상세 정보들--------------------------------------</div>
          <div>제품 상세 정보들--------------------------------------</div>
          <div>제품 상세 정보들--------------------------------------</div>
          <div>제품 상세 정보들--------------------------------------</div>
          <div>제품 상세 정보들--------------------------------------</div>

          <div>관심0 조회수0</div>
          <div>현재 가격: 25,000</div>
          <div>즉시 구매가: 27,000</div>

          <p className="text-end">평균 거래가: 26,000</p>
          <div className="text-end">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              입찰하기
            </button>

            <div className="modal" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content text-start">
                  <div className="modal-header">
                    <h4 className="modal-title">결제</h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  <div className="modal-body">
                    <div className="modal-body">
                      <form action="/action_page.php">
                        <div>
                          <label for="text" class="form-label">
                            <h4>금액 </h4>
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder="금액 입력"
                            name=""
                          />
                        </div>

                        <div class="form-check my-3">
                          <label class="form-check-label">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              name="remember"
                            />
                            Remember me
                          </label>
                        </div>
                        <div class="text-end">
                          <button type="submit" class="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ height: "3px" }}></hr>
          <div className="mt-1">다른 상품 정보</div>
          <div className="row mt-3">
            <div className="col-lg-8">
              <img className="d-block w-100" src="img/나이키신발4.png" />
            </div>
            <div className="col-lg-4 ">
              <div className="ms-3">
                <div className="border border-3 border-primary">asdadssa</div>
                <div className="border border-3 border-primary mt-3">
                  남은시간 : 18:39
                </div>
                <div className="border border-3 border-primary mt-3">
                  이케아 트롤리 팔아요
                </div>
                <div className="border border-3 border-primary mt-3">
                  경기도 의왕시 오전동
                </div>
                <div className="border border-3 border-primary mt-3">
                  현재 가격: 25,000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
