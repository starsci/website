import {HR} from './hr'
import {Subtitle} from './subtitle'

export default function About() {
  return (
    <main className="container p-6">
      <h1 className="text-left lg:text-center text-5xl font-semibold mb-6">
        About Us
      </h1>
      <h2 className="text-2xl font-semibold mb-2">Our History</h2>
      <p>
        President Gloria Macapagal-Arroyo signed into law the Republic Act 9083,
        creating Santa Rosa Science and Technology High School on April 8, 2001.
        Cong. Uliran T. Joaquin of the 1st District of Laguna was its principal
        author. The school started in School Year 2002-2003 through the
        initiative and financial support of the local government of Santa Rosa
        led by Mayor Leon C. Arcillas.
      </p>

      <HR />

      <section className="block lg:grid auto-cols-auto items-center gap-x-8 gap-y-4">
        <h2 className="text-left lg:text-center text-2xl font-semibold mb-2 col-span-2">
          DepEd Mission, Vision, and Core Values
        </h2>

        <Subtitle>DepEd Vision</Subtitle>
        <p className="col-start-2 mb-4 lg:mb-0">
          We dream of Filipinos who passionately love their country and whose
          values and competencies enable them to realize their full potential
          and contribute meaningfully to building the nation. As a
          learner-centered public institution, the Department of Education
          continuously improves itself to better serve its stakeholders.
        </p>

        <Subtitle>DepEd Mission</Subtitle>
        <p className="col-start-2 mb-4 lg:mb-0">
          To protect and promote the right of every Filipino to quality,
          equitable, culture-based, and complete basic education where: Students
          learn in a child-friendly, gender-sensitive, safe, and motivating
          environment. Teachers facilitate learning and constantly nurture every
          learner. Administrators and staff, as stewards of the institution,
          ensure an enabling and supportive environment for effective learning
          to happen. Family, community and other stakeholders are actively
          engaged and share responsibility for developing life-long learners.
        </p>

        <Subtitle>DepEd Core Values</Subtitle>
        <ul className="col-start-2 mb-4 lg:mb-0 list-disc list-inside">
          <li>Maka-Diyos</li>
          <li>Maka-tao</li>
          <li>Makakalikasan</li>
          <li>Makabansa</li>
        </ul>

        <hr className="hidden lg:block w-full bg-gray-700 my-2 col-span-2" />

        <h2 className="text-left lg:text-center text-2xl font-semibold mb-2 col-span-2">
          Mission, Vision, and Values
        </h2>

        <Subtitle>Our Vision</Subtitle>
        <p className="col-start-2 mb-4 lg:mb-0">
          Santa Rosa Science and Technology High School envisions students who
          are globally competitive with high morals, responsible, diligent,
          smart, innovative, adaptive, flexible, confident, patriotic future
          leaders of our nation produced by highly motivated and committed 21st
          century professional teachers and school personnel who are spurring
          growth in character and intelligence through the generous support of
          dynamic, dedicated, goal-driven, value-oriented external stakeholders.
        </p>

        <Subtitle>Our Mission</Subtitle>
        <p className="col-start-2 mb-4 lg:mb-0">
          Through the collaborative effort of all the internal and external
          stakeholders, Santa Rosa Science and Technology High School will
          become a child-friendly, gender-sensitive, world-class, world-class,
          state-of-the-art, green school responsive to the science and
          technology educational needs of the society towards a Maka-Diyos,
          Makatao, Makakalikasan, Makabansa community in a highly developed
          country.
        </p>

        <hr className="hidden lg:block w-full bg-gray-700 my-2 col-span-2" />

        <Subtitle>DepEd Quality Policy Statement</Subtitle>
        <div className="col-start-2 mb-4 lg:mb-0">
          <p className="mb-2">
            The Department of Education is committed to provide learners with
            quality basic education that is accessible, inclusive, liberating
            through:
          </p>

          <ul className="mb-2 list-disc list-inside">
            <li>Proactive leadership</li>
            <li>Shared governance</li>
            <li>Evidenced-based policies, standards and programs</li>
            <li>Responsive and relevant curricula</li>
            <li>
              Highly competent and committed officials, and teaching and
              non-teaching personnel
            </li>
            <li>An enabling learning environment</li>
          </ul>

          <p>
            The Department upholds the highest standards of conduct and
            performance to fulfill stakeholders&apos; needs and expectations by
            adhering to constitutional mandates, statutory, and regulatory
            requirements, and sustains client satisfaction through continuous
            improvement of the Quality Management System.
          </p>
        </div>

        <hr className="hidden lg:block w-full bg-gray-700 my-2 col-span-2" />

        <h2 className="text-left lg:text-center text-2xl font-semibold mb-2 col-span-2">
          Rights, Duties, and Responsibilities of the Students
        </h2>

        <Subtitle>Rights and Duties</Subtitle>
        <ul className="col-start-2 mb-4 lg:mb-0 list-disc list-inside">
          <li>
            To have a meaningful education that adequately meets the needs of
            the individual students within the capabilities of the school
          </li>
          <li>
            To express an opinion and provide input in the development of the
            school in a respectful and polite manner
          </li>
          <li>
            To have adequate and timely notice of all rules and regulations,
            policies, and penalties to which they are subject to
          </li>
          <li>
            To have a free and honest election of their peers in the classroom
            and the student government organization
          </li>
          <li>
            To present complaints or grievances to school authorities and to
            receive a prompt reply from the school officials
          </li>
          <li>To access and use school facilities</li>
        </ul>

        <Subtitle>Duties and Responsibilities</Subtitle>
        <ul className="col-start-2 mb-4 lg:mb-0 list-disc list-inside">
          <li>
            To obey and observe all rules, regulations, policies, and codes of
            conduct in the school
          </li>
          <li>
            To uphold the mission and vision, ideals, and integrity of the
            school; to give honor and glory to the school, community, family,
            and the country, and show respect for God
          </li>
          <li>
            To give proper time and devotion to studies and achieve the standard
            grade requirements of the school
          </li>
          <li>
            To respect and maintain a good relationship with peers, teachers,
            staff, parents, family members, and the proper authorities in and
            outside the school
          </li>
          <li>
            To maintain orderliness, and cleanliness, and take care of school
            and facility
          </li>
        </ul>
      </section>

      <HR />

      <h2 className="text-left lg:text-center text-2xl font-semibold mb-2">
        School Curriculum
      </h2>
      <p>
        Santa Rosa Science and Technology High School adopts a Science,
        Technology, and Engineering (STE) Curriculum anchored with the SHS
        Academic Track STEM (Science, Technology, Engineering, and Mathematics)
        Strand of the Philippines&apos; K to 12 Educational Program. It is
        focused on pure science and its application to industry using the latest
        technologies, Computer rooms are to be linked to the internet, including
        multi-media classrooms. Instruction shall be supplemented with visits to
        known science institutions, laboratories & plants. The school shall
        maintain a well-stocked library, and subscribe to professional,
        scientific, and technological magazines and manuals.
      </p>
    </main>
  )
}
