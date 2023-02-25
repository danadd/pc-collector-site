import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const P1Harmony = () => {
  return (
    <div className="group_information container">
      <img className="logo_image" src="P1Harmony_Logo.png" />
      <p>
        P1Harmony (Korean: 피원하모니; RR: Piwonhamoni; Japanese: ピーワンハーモニー;
        Acronym: P1H) is a South Korean boy band formed and managed by FNC Entertainment,
        consisting of Keeho, Theo, Jiung, Intak, Soul, and Jongseob. The group was
        introduced through premiered the future film P1H: The Beginning of a New World
        starring by all members on August 27, 2020. The group officially debuted on
        October 28, with their first EP Disharmony: Stand Out.
      </p>

      <img className="logo_image" src="P1Harmony_Group.png" />

      <ul>
        <b>Members</b> <li>Keeho</li> <li>Theo </li> <li>Jiung</li> <li>Intak</li>{" "}
        <li>Soul</li> <li>Jongseob</li>
      </ul>

      <Link href="/Home">
        <button type="button" className="btn btn-primary">
          Back To Home
        </button>
      </Link>
      <p>
        source: <a href="https://en.wikipedia.org/wiki/P1Harmony">Wikipedia</a>
      </p>

      <footer>Last updated 3.2023</footer>
    </div>
  );
};

export default P1Harmony;
