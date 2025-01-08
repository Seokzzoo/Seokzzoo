import "./CourseCard.css"

function CourseCard() {
  return (
    <div className="CourseCard">
      <div class="course-card col-sm-6 col-md-4 col-lg-3">
        <a class="content" href="/course/a/personal_branding?from=course-list">
          <div class="cover">
            <img
              class="top loaded"
              alt=""
              src="https://dst6jalxvbuf5.cloudfront.net/media/images/Course/cover_image/221020_172526/%E1%84%8F%E1%85%A9%E1%84%89%E1%85%B3%E1%84%8F%E1%85%A1%E1%84%83%E1%85%B3_%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B3%E1%86%B8%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A5%E1%86%BC_PC.png"
              loading="lazy"
              data-ll-status="loaded"
            />
          </div>
          <div class="info">
            <ul class="tags">
              <li class="tag">커머스</li>

              <li class="tag">자기계발</li>

              <li class="tag">SNS</li>
            </ul>
            <h4 class="name">평범한 당신의 인생을 바꾸는 치트키! 월 천+ 버는 퍼스널브랜딩</h4>
            <div class="prices">
              <span class="sale-percent">51%↓</span>
              <span class="monthly-price">월 16,583원</span>
              <span class="installment-month">/ 12개월</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default CourseCard
