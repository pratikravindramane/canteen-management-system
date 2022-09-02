import classes from  "./About.module.css";
const About = () => {
  return (
    <section className={classes.section2} id="about">
      <h3>About</h3>
      <hr />
      <div className={classes["about-info"]}>
        <div>
          <div>
            Canteen management System are used to track and monitor when
            products start and stop work. A time and Payroll system provides
            many benefits to organization as it enables an employer to have full
            control of their products working hours as it monitors late
            arrivals, early departures, time taken on breaks ans absenteeism.
            <p>
              It aslo helps to control labor costs by reducing over-payments.
              Which are often caused by paying products for tiem that are not
              working, and eliminates tracsciption errorm interprelation error
              and intentional error.
            </p>
            <p>
              TNA system are also invaluable for ensuring complaince with labor
              regulations regarding proff of Payroll. All of these benefits
              provide both employer and products with confidence in the accuracy
              of their wage payments all while improving productivity.
            </p>
          </div>
          <p>
            Traditionally manual sytems were used that rely on highly skilled
            people laboriously adding up paper cards whic hhave times stamped
            onto them using a time stampint machine such as the Bundy Clock.
            Time stamping machines were used for centrury but have since been
            phased out and replaced with cheaper automated systems which
            elimanate the need for payroll staff to manually input product
            hours.
          </p>
        </div>

      </div>
    </section>
  );
};
export default About;
