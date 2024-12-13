import React from 'react';
import styles from './page.module.css';
import NavBar from './components/NavBar';

const Home = () => {
  return (
    <main>
      <NavBar />
      <div className='pl-28'>
        <div className={styles.title}>
          <div className='bg-tblack-d w-3 my-8'></div>
          <div className={styles.titleText}>HI<br />I'M TOM</div>
        </div>

        <div className={styles.content}>
          <section>
            <h1>Nice Curves</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere alias corporis impedit similique et eos. Perspiciatis delectus nisi a id officia soluta nesciunt excepturi corrupti, qui eius aspernatur fugit repellat.</p>
          </section>

          <section>
            <h1>Nice Curves</h1>
            <p>Ut quae temporibus, neque iure eum esse quibusdam ad commodi quos tempore eius perspiciatis. Dolorum quo libero nulla, error incidunt tenetur mollitia quasi quia placeat cupiditate ratione ipsa eaque numquam.</p>
          </section>
          <section>
            <h1>Nice Curves</h1>
            <p>Sed voluptate quis libero ab eveniet corrupti ex sit voluptatem tempora molestias eos incidunt quaerat sint dolorem perspiciatis enim itaque, quia quae. Totam sed sunt fugiat obcaecati quidem omnis nulla?</p>
          </section>
          <section>
            <h1>Nice Curves</h1>
            <p>Cumque, minus odio! Consectetur voluptas porro sed optio dolorem laborum incidunt dignissimos odit ut iusto officiis cum esse est ad labore distinctio asperiores, natus delectus, fugiat, modi minima repellat tempora?</p>
          </section>
          <section>
            <h1>Nice Curves</h1>
            <p>Eligendi, amet beatae, quidem asperiores vel ullam, itaque dignissimos assumenda nulla eum modi eaque ea quos et quae? Maxime corrupti libero assumenda ea reiciendis quas iure quibusdam quasi explicabo mollitia.</p>
          </section>
          <section>
            <h1>Nice Curves</h1>
            <p>Dolore neque molestiae culpa, aspernatur soluta numquam consequatur veniam sunt, dicta tempore dolor. Praesentium, quisquam, iusto rerum quos aperiam omnis est provident nisi commodi sint porro quia, expedita velit dolores!</p>
          </section>
          <section>
            <h1>Nice Curves</h1>
            <p>Dolorem placeat magni atque fugiat provident saepe minus, mollitia cumque natus sed earum veniam voluptas quasi rem quod fuga ducimus modi impedit ipsam consectetur? Quidem corporis quas quasi enim iste?</p>
          </section>
          <section>
            <h1>Nice Curves</h1>
            <p>Nihil modi ea laudantium accusantium blanditiis adipisci officia nulla porro doloribus, praesentium ab autem, explicabo, molestiae obcaecati veniam cumque aut optio earum omnis. Eos, iste? Ipsum aperiam delectus adipisci accusantium.</p>
          </section>
        </div>
      </div>


    </main>
  );
};

export default Home;