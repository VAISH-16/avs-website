import React from 'react';
import ConsultationForm from '../../components/ConsultationForm';
import RealLifeStoryCard from '../../components/RealLifeStoryCard';

export default function MutualFundsPage() {
  return (
    <main>

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="bg-dark text-white">

        <div className="container py-4 py-lg-5">

          <div className="row align-items-center g-4 g-lg-5 py-lg-4">

            {/* =====================================================
                LEFT — HERO CONTENT
            ====================================================== */}
            <div className="col-lg-7">

              <div className="text-uppercase small fw-bold text-warning mb-3">
                Wealth Creation
              </div>

              <h1 className="display-3 fw-bold text-white mb-4">
                Don't just invest.
                <br />
                Invest for something.
              </h1>

              <p className="lead text-white-50 mb-4">
                Whether it's your child's future, your retirement,
                a dream home or simply building long-term wealth —
                your investments should have a purpose.
              </p>

              {/* CTA */}
              <div className="d-flex flex-wrap gap-3">

                <a
                  href="#investment-goal"
                  className="btn btn-warning btn-lg px-4 py-3 fw-semibold"
                >
                  Plan Your Goal
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>

                <a
                  href="#what-is-mutual-fund"
                  className="btn btn-outline-light btn-lg px-4 py-3"
                >
                  How Mutual Funds Work
                </a>

              </div>

              {/* TRUST POINTS */}
              <div className="d-flex flex-wrap gap-4 mt-4">

                <span className="small text-white-50">
                  <i className="bi bi-check-circle text-warning me-2"></i>
                  Goal-based approach
                </span>

                <span className="small text-white-50">
                  <i className="bi bi-check-circle text-warning me-2"></i>
                  Personalized guidance
                </span>

                <span className="small text-white-50">
                  <i className="bi bi-check-circle text-warning me-2"></i>
                  Regular review
                </span>

              </div>

            </div>


            {/* =====================================================
                RIGHT — GOAL VISUAL
            ====================================================== */}
            <div className="col-lg-5">

              <div className="border border-secondary rounded-4 p-4 p-lg-5">

                {/* TODAY → FUTURE */}
                <div className="d-flex align-items-center justify-content-between mb-4">

                  <span className="small text-uppercase fw-semibold text-warning">
                    Today
                  </span>

                  <div className="flex-grow-1 mx-3">
                    <div className="border-top border-secondary"></div>
                  </div>

                  <i className="bi bi-arrow-right text-warning"></i>

                  <div className="flex-grow-1 mx-3">
                    <div className="border-top border-secondary"></div>
                  </div>

                  <span className="small text-uppercase fw-semibold text-warning">
                    Future Goal
                  </span>

                </div>


                {/* GOAL */}
                <div className="d-flex align-items-start gap-3 mb-4">

                  <div
                    className="border border-warning rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: '58px',
                      height: '58px'
                    }}
                  >
                    <i className="bi bi-mortarboard text-warning fs-4"></i>
                  </div>

                  <div>

                    <div className="small text-white-50 text-uppercase">
                      Planning for
                    </div>

                    <h3 className="text-white fw-bold mt-2 mb-2">
                      Your Child's Education
                    </h3>

                    <p className="text-white-50 mb-0">
                      Start early. Invest regularly.
                      Give your goal time to grow.
                    </p>

                  </div>

                </div>


                {/* JOURNEY */}
                <div className="d-flex align-items-center gap-2">

                  <div className="text-center">

                    <div className="small text-white-50">
                      START
                    </div>

                    <strong className="text-white">
                      Today
                    </strong>

                  </div>


                  <div className="flex-grow-1">

                    <div
                      className="progress bg-secondary"
                      style={{ height: '3px' }}
                    >

                      <div
                        className="progress-bar bg-warning"
                        style={{ width: '55%' }}
                      ></div>

                    </div>

                  </div>


                  <div className="text-center">

                    <div className="small text-white-50">
                      GOAL
                    </div>

                    <strong className="text-white">
                      Future
                    </strong>

                  </div>

                </div>


                <hr className="border-secondary my-4" />


                <p className="small text-white-50 mb-0">
                  Your investment strategy should follow your goal —
                  not the other way around.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SECTION 1 — INVESTMENT GOAL
      ========================================================== */}
      <section
        id="investment-goal"
        className="py-5 bg-light"
      >

        <div className="container py-4">

          <div className="text-center mb-5">

            <div className="text-uppercase small fw-bold text-warning mb-2">
              Start With The Goal
            </div>

            <h2 className="display-5 fw-bold">
              What are you investing for?
            </h2>

            <p
              className="lead text-secondary mx-auto mt-3"
              style={{ maxWidth: '700px' }}
            >
              The right investment strategy starts with understanding
              what you want your money to accomplish.
            </p>

          </div>


          <div className="row g-4">

            <GoalCard
              icon="bi-graph-up-arrow"
              title="Build Wealth"
              text="Build long-term wealth with a disciplined investment approach."
            />

            <GoalCard
              icon="bi-hourglass-split"
              title="Plan Retirement"
              text="Prepare financially for the lifestyle you want after retirement."
            />

            <GoalCard
              icon="bi-mortarboard"
              title="Child's Education"
              text="Start preparing for tomorrow's education expenses today."
            />

            <GoalCard
              icon="bi-house"
              title="Buy a Home"
              text="Work toward a future home or down-payment goal."
            />

            <GoalCard
              icon="bi-wallet2"
              title="Start a SIP"
              text="Turn regular monthly savings into a disciplined investment habit."
            />

            <GoalCard
              icon="bi-search"
              title="Review My Investments"
              text="Understand whether your existing investments still fit your goals."
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          SECTION 2 — WHAT IS A MUTUAL FUND?
      ========================================================== */}
      <section
        id="what-is-mutual-fund"
        className="py-5"
      >

        <div className="container py-4">

          <div className="row align-items-center g-5">

            {/* TEXT */}
            <div className="col-lg-12">

              <div className="text-uppercase small fw-bold text-warning mb-3">
                The Simple Idea
              </div>

              <h2 className="display-5 fw-bold mb-4">
                A mutual fund is a tool.
                <br />
                Your goal is the reason.
              </h2>

              <p className="lead text-secondary">
                You don't need to pick individual stocks or become
                a market expert to start investing.
              </p>

              <p className="text-secondary">
                A mutual fund pools money from many investors and
                invests it across a collection of assets such as
                shares, bonds or other securities, depending on
                the fund's objective.
              </p>

              <p className="text-secondary">
                This gives investors access to a professionally
                managed investment portfolio without having to
                manage every individual investment themselves.
              </p>


              <div className="border-start border-4 border-warning bg-light p-4 mt-4">

                <div className="text-secondary mb-2">
                  Instead of asking
                </div>

                <h5 className="fw-bold">
                  "Which investment should I buy?"
                </h5>

                <div className="text-secondary mt-3 mb-2">
                  start by asking
                </div>

                <h4 className="fw-bold mb-0">
                  "What am I investing for?"
                </h4>

              </div>

            </div>


            {/* VISUAL */}


          </div>

        </div>

      </section>


      {/* =========================================================
          SECTION 3 — SIP
      ========================================================== */}
      <section className="py-5 bg-light">

        <div className="container py-4">

          <div className="row align-items-center g-5">

            {/* LEFT */}
            <div className="col-lg-5">

              <div className="text-uppercase small fw-bold text-warning mb-3">
                SIP
              </div>

              <h2 className="display-5 fw-bold">
                You don't have to
                <br />
                start big.
                <br />
                Start consistently.
              </h2>

              <p className="text-secondary mt-4">
                A Systematic Investment Plan allows you to invest
                a fixed amount regularly into a mutual fund.
              </p>

              <p className="text-secondary">
                The idea is simple — make investing part of your
                routine instead of waiting for the perfect time
                or a large lump sum.
              </p>


              <div className="border-start border-4 border-warning bg-white p-4 mt-4">

                <div className="small text-uppercase text-secondary">
                  The Idea
                </div>

                <h5 className="fw-bold mt-2 mb-0">
                  Consistency gives your investments time to work.
                </h5>

              </div>

            </div>


            {/* RIGHT */}
            <div className="col-lg-7">

              <div className="bg-white border rounded-4 p-4 p-lg-5">

                <div className="d-flex justify-content-between align-items-center mb-5">

                  <div>

                    <div className="small text-uppercase text-secondary">
                      Example
                    </div>

                    <h3 className="fw-bold mb-0 mt-1">
                      ₹5,000 / month
                    </h3>

                  </div>


                  <div className="text-end">

                    <div className="small text-uppercase text-secondary">
                      Approach
                    </div>

                    <strong>
                      Regular Investing
                    </strong>

                  </div>

                </div>


                <div className="d-flex align-items-center">

                  <SipStep label="MONTH 1" />

                  <div className="flex-grow-1 border-top"></div>

                  <SipStep label="YEAR 1" />

                  <div className="flex-grow-1 border-top"></div>

                  <SipStep label="YEAR 5" />

                  <div className="flex-grow-1 border-top"></div>

                  <SipStep label="YEAR 10" />

                </div>


                <div className="text-center mt-5">

                  <div className="small text-uppercase text-secondary">
                    Over Time
                  </div>

                  <h4 className="fw-bold mt-2">
                    Your contributions + potential market growth
                  </h4>

                  <p className="small text-secondary mb-0">
                    Returns are market-linked and not guaranteed.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SECTION 4 — TYPES OF FUNDS
      ========================================================== */}
      <section className="py-5">

        <div className="container py-4">

          <div className="text-center mb-5">

            <div className="text-uppercase small fw-bold text-warning mb-2">
              Know Your Options
            </div>

            <h2 className="display-5 fw-bold">
              Different goals.
              <br />
              Different kinds of funds.
            </h2>

            <p
              className="lead text-secondary mx-auto mt-3"
              style={{ maxWidth: '700px' }}
            >
              There isn't one mutual fund that is right for everyone.
              Your choice should depend on your goal, time horizon
              and ability to handle market fluctuations.
            </p>

          </div>


          <div className="row g-4">

            <FundTypeCard
              icon="bi-graph-up-arrow"
              title="EQUITY FUNDS"
              heading="Looking for long-term growth?"
              text="Equity funds invest predominantly in shares and can be suitable for long-term goals where you can accept higher market fluctuations."
            />

            <FundTypeCard
              icon="bi-shield-check"
              title="DEBT FUNDS"
              heading="Looking for relatively lower volatility?"
              text="Debt funds primarily invest in fixed-income securities and may have a role in more conservative investment strategies."
            />

            <FundTypeCard
              icon="bi-balance-scale"
              title="HYBRID FUNDS"
              heading="Want a balance?"
              text="Hybrid funds combine different asset classes, such as equity and debt, to create a more balanced investment approach."
            />

          </div>


          <div className="text-center mt-5">

            <div className="bg-light border rounded-3 p-4 d-inline-block">

              <p className="mb-1">
                The right fund isn't simply the one with the
                highest past return.
              </p>

              <strong>
                It's the one that fits the job your money needs to do.
              </strong>

            </div>

          </div>

        </div>

      </section>





      {/* =========================================================
          SECTION 6 — WHY AVS
      ========================================================== */}
      <section className="py-5">

        <div className="container py-4">

          <div className="row align-items-center g-5">

            {/* LEFT */}
            <div className="col-lg-6">

              <div className="text-uppercase small fw-bold text-warning mb-3">
                Personalized Guidance
              </div>

              <h2 className="display-5 fw-bold">
                Buying a mutual fund is easy.
                <br />
                Building the right portfolio is different.
              </h2>

              <p className="lead text-secondary mt-4">
                You don't need to become an investment expert.
              </p>

              <h3 className="fw-bold">
                You need a plan.
              </h3>

              <p className="text-secondary">
                Your investment strategy should consider your goals,
                timeline, financial circumstances and ability to handle
                market fluctuations.
              </p>

            </div>


            {/* RIGHT */}
            <div className="col-lg-6">

              <div className="border rounded-4 p-4 p-lg-5">

                <ProcessStep
                  number="01"
                  title="Understand Your Goal"
                  text="What are you trying to achieve?"
                />

                <ProcessStep
                  number="02"
                  title="Understand Your Timeline"
                  text="When will you need the money?"
                />

                <ProcessStep
                  number="03"
                  title="Understand Your Risk"
                  text="How much market fluctuation are you comfortable with?"
                />

                <ProcessStep
                  number="04"
                  title="Build the Portfolio"
                  text="Select an investment approach aligned with your needs."
                />

                <ProcessStep
                  number="05"
                  title="Review Over Time"
                  text="Your financial plan should evolve as your life changes."
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SECTION 7 — GOALS
      ========================================================== */}
      <section className="py-5 bg-light">

        <div className="container py-4">

          <div className="text-center mb-5">

            <div className="text-uppercase small fw-bold text-warning mb-2">
              Your Money. Your Goals.
            </div>

            <h2 className="display-5 fw-bold">
              Give your money a purpose.
            </h2>

            <p
              className="lead text-secondary mx-auto mt-3"
              style={{ maxWidth: '700px' }}
            >
              Mutual funds can play different roles within a broader
              financial plan depending on your individual circumstances.
            </p>

          </div>


          <div className="row g-3 justify-content-center">

            <GoalPurpose
              icon="bi-mortarboard"
              title="Child's Education"
            />

            <GoalPurpose
              icon="bi-house"
              title="Future Home"
            />

            <GoalPurpose
              icon="bi-sun"
              title="Retirement"
            />

            <GoalPurpose
              icon="bi-graph-up"
              title="Long-Term Wealth"
            />

            <GoalPurpose
              icon="bi-airplane"
              title="Major Life Goals"
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          SECTION 8 — CONSULTATION
      ========================================================== */}
      <section
        id="consultation-form"
        className="py-5 bg-dark text-white"
      >

        <div className="container py-5">

          <div className="row align-items-center g-5">

            {/* LEFT */}
            <div className="col-lg-6">

              <div className="text-uppercase small fw-bold text-warning mb-3">
                Let's Talk About Your Goal
              </div>

              <h2 className="display-5 fw-bold text-white">
                You bring the goal.
                <br />
                We'll help you plan the path.
              </h2>

              <p className="lead text-white-50 mt-4">
                Tell us what you're planning for and our team can
                help you explore an investment approach suited to
                your goals, timeline and circumstances.
              </p>


              <div className="mt-4">

                <div className="d-flex align-items-center mb-3">

                  <i className="bi bi-check-circle text-warning me-3"></i>

                  <span>
                    Goal-based investment planning
                  </span>

                </div>


                <div className="d-flex align-items-center mb-3">

                  <i className="bi bi-check-circle text-warning me-3"></i>

                  <span>
                    Risk and time-horizon assessment
                  </span>

                </div>


                <div className="d-flex align-items-center">

                  <i className="bi bi-check-circle text-warning me-3"></i>

                  <span>
                    Ongoing portfolio review
                  </span>

                </div>

              </div>

            </div>


            {/* FORM */}
            <div className="col-lg-6">

              <div className="bg-white rounded-4 p-3 p-lg-4">

                <ConsultationForm
                  title="Start Your Mutual Fund Conversation"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          DISCLAIMER
      ========================================================== */}
      <section className="py-4 bg-light">

        <div className="container">

          <p className="small text-secondary text-center mb-0">

            Mutual fund investments are subject to market risks.
            Read all scheme-related documents carefully before investing.
            Past performance is not indicative of future returns.
            Investment suitability depends on individual goals,
            risk profile, financial circumstances and investment horizon.

          </p>

        </div>

      </section>

    </main>
  );
}


/* ================================================================
   GOAL CARD
================================================================ */

function GoalCard({ icon, title, text }) {
  return (
    <div className="col-md-6 col-lg-4">

      <div className="card h-100 border rounded-4 shadow-sm">

        <div className="card-body p-4">

          <div className="mb-4">
            <i
              className={`bi ${icon} fs-2 text-warning`}
            ></i>
          </div>

          <h4 className="fw-bold">
            {title}
          </h4>

          <p className="text-secondary mb-0">
            {text}
          </p>

        </div>

      </div>

    </div>
  );
}


/* ================================================================
   INVESTOR BUBBLE
================================================================ */

function InvestorBubble() {
  return (
    <div className="col-3 text-center">

      <div
        className="rounded-circle bg-white border d-flex align-items-center justify-content-center mx-auto"
        style={{
          width: '50px',
          height: '50px'
        }}
      >

        <i className="bi bi-person text-dark"></i>

      </div>

    </div>
  );
}


/* ================================================================
   INVESTMENT ASSET
================================================================ */

function InvestmentAsset({ icon, label }) {
  return (
    <div className="col-4">

      <div className="bg-white border rounded-3 text-center p-3">

        <i
          className={`bi ${icon} fs-4 text-warning`}
        ></i>

        <div className="small text-secondary mt-2">
          {label}
        </div>

      </div>

    </div>
  );
}


/* ================================================================
   SIP STEP
================================================================ */

function SipStep({ label }) {
  return (
    <div className="text-center px-1">

      <div
        className="rounded-circle bg-dark text-warning d-flex align-items-center justify-content-center mx-auto mb-2"
        style={{
          width: '42px',
          height: '42px'
        }}
      >

        <i className="bi bi-currency-rupee"></i>

      </div>

      <span className="small text-secondary">
        {label}
      </span>

    </div>
  );
}


/* ================================================================
   FUND TYPE CARD
================================================================ */

function FundTypeCard({
  icon,
  title,
  heading,
  text
}) {
  return (
    <div className="col-lg-4">

      <div className="card h-100 border rounded-4">

        <div className="card-body p-4 p-lg-5">

          <div className="mb-4">

            <i
              className={`bi ${icon} fs-2 text-warning`}
            ></i>

          </div>

          <div className="small text-uppercase fw-bold text-warning">
            {title}
          </div>

          <h3 className="fw-bold mt-3">
            {heading}
          </h3>

          <p className="text-secondary mb-0">
            {text}
          </p>

        </div>

      </div>

    </div>
  );
}


/* ================================================================
   PROCESS STEP
================================================================ */

function ProcessStep({
  number,
  title,
  text
}) {
  return (
    <div className="d-flex align-items-start mb-4">

      <div
        className="rounded-circle bg-dark text-warning d-flex align-items-center justify-content-center flex-shrink-0 me-3"
        style={{
          width: '45px',
          height: '45px'
        }}
      >

        <span className="small fw-bold">
          {number}
        </span>

      </div>

      <div>

        <h5 className="fw-bold mb-1">
          {title}
        </h5>

        <p className="text-secondary mb-0">
          {text}
        </p>

      </div>

    </div>
  );
}


/* ================================================================
   GOAL PURPOSE
================================================================ */

function GoalPurpose({
  icon,
  title
}) {
  return (
    <div className="col-6 col-md-4 col-lg-auto">

      <div className="bg-white border rounded-4 px-4 py-4 text-center h-100">

        <i
          className={`bi ${icon} fs-3 text-warning`}
        ></i>

        <div className="fw-semibold mt-3">
          {title}
        </div>

      </div>

    </div>
  );
}