import ExecutiveProfile from '@/components/ExecutiveProfile'
import {Logo} from '@/components/Logo'
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {TabsContent} from '@radix-ui/react-tabs'
import Image from 'next/image'

export const metadata = {
  title: 'About Us | Santa Rosa Science and Technology High School',
  description: 'Learn about Santa Rosa Science and Technology High School'
}

export default function About() {
  return (
    <main>
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <Tabs defaultValue="history">
        <TabsList className="grid h-full w-full grid-cols-1 md:grid-cols-4 xl:grid-cols-7 gap-4">
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="logo">Logo</TabsTrigger>
          <TabsTrigger value="mission-vision">Vision and Mission</TabsTrigger>
          <TabsTrigger value="deped-mission-vision">
            DepEd Vision and Mission
          </TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="facilities">School Facilities</TabsTrigger>
          <TabsTrigger value="organizational-chart">
            Organizational Chart
          </TabsTrigger>
        </TabsList>
        <TabsContent value="history">
          <section className="prose mt-4 max-w-none">
            <h2>Our History</h2>
            <p>
              President Gloria Macapagal-Arroyo signed into law the Republic Act
              9083, creating Santa Rosa Science and Technology High School on
              April 8, 2001. Cong. Uliran T. Joaquin of the 1st District of
              Laguna was its principal author.
            </p>
            <p>
              The school started in School Year 2002-2003 through the initiative
              and financial support of the local government of Santa Rosa led by
              Mayor Leon C. Arcillas.
            </p>
          </section>
        </TabsContent>
        <TabsContent value="logo">
          <section className="prose mt-4 max-w-none">
            <h2>The SciTech Logo</h2>
            <p>
              The SciTech logo signifies progress in the community. Each part
              symbolizes a component of progress.
            </p>
            <div className="flex md:space-x-4 md:space-y-0 space-x-0 space-y-4 flex-col-reverse md:flex-row">
              <ul>
                <li>
                  <strong>The open-winged eagle</strong> represents the strong
                  determination to move forward towards prosperity, the year
                  2002 for the birth of SciTech High; the ribbon that the eagle
                  held on its beak for the respect in God.
                </li>
                <li>
                  <strong>
                    The two upright concrete posts of the Santa Rosa Arch
                  </strong>{' '}
                  for the strong support of the City Government and its populace
                </li>
                <li>
                  <strong>The building</strong> for the growth of trade and
                  industries.
                </li>
                <li>
                  <strong>
                    The wheel with eight spokes, the computer, and the space
                    satellite
                  </strong>{' '}
                  for the advancement in transportation and communication
                </li>
                <li>
                  <strong>
                    The test tubes, the flasks, and the atoms encircling the
                    round object with rays
                  </strong>{' '}
                  for continuing studies in the field of science.
                </li>
                <li>
                  <strong>The blue and yellow background</strong> symbolizes our
                  love and loyalty for our country and our highest aspirations.
                </li>
                <li>
                  <strong>The DepEd shield</strong> logo for the supportive and
                  protective government umbrella in high school education.
                </li>
              </ul>
              <div className="flex md:block justify-center">
                <Image
                  src="/assets/srsths-logo.webp"
                  alt="Santa Rosa Science and Technology High School Logo"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="mission-vision">
          <section className="prose mt-4 max-w-none">
            <h2>Mission and Vision</h2>
            <h3>Vision</h3>
            <blockquote>
              Santa Rosa Science and Technology High School envisions students
              who are globally competitive with high morals, responsible,
              diligent, smart, innovative, adaptive, flexible, confident,
              patriotic future leaders of our nation produced by highly
              motivated and committed 21st century professional teachers and
              school personnel who are spurring growth in character and
              intelligence through the generous support of dynamic, dedicated,
              goal-driven, value-oriented external stakeholders.
            </blockquote>
            <h3>Mission</h3>
            <blockquote>
              Through the collaborative effort of all the internal and external
              stakeholders, Santa Rosa Science and Technology High School will
              become a child-friendly, gender-sensitive, world-class,
              world-class, state-of-the-art, green school responsive to the
              science and technology educational needs of the society towards a
              Maka-Diyos, Makatao, Makakalikasan, Makabansa community in a
              highly developed country.
            </blockquote>
          </section>
        </TabsContent>
        <TabsContent value="deped-mission-vision">
          <section className="prose mt-4 max-w-none">
            <h2>DepEd Mission, Vision, and Core Values</h2>
            <h3>DepEd Vision</h3>
            <blockquote>
              We dream of Filipinos who passionately love their country and
              whose values and competencies enable them to realize their full
              potential and contribute meaningfully to building the nation. As a
              learner-centered public institution, the Department of Education
              continuously improves itself to better serve its stakeholders.
            </blockquote>
            <h3>DepEd Mission</h3>
            <blockquote>
              To protect and promote the right of every Filipino to quality,
              equitable, culture-based, and complete basic education where:
              Students learn in a child-friendly, gender-sensitive, safe, and
              motivating environment. Teachers facilitate learning and
              constantly nurture every learner. Administrators and staff, as
              stewards of the institution, ensure an enabling and supportive
              environment for effective learning to happen. Family, community
              and other stakeholders are actively engaged and share
              responsibility for developing life-long learners.
            </blockquote>
            <h3>DepEd Core Values</h3>
            <ul>
              <li>Maka-Diyos</li>
              <li>Maka-tao</li>
              <li>Makakalikasan</li>
              <li>Makabansa</li>
            </ul>
            <h3>Quality Policy Statement</h3>
            <p>
              The Department of Education is committed to provide learners with
              quality basic education that is accessible, inclusive, liberating
              through:
            </p>
            <ul>
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
              performance to fulfill stakeholders&apos; needs and expectations
              by adhering to constitutional mandates, statutory, and regulatory
              requirements, and sustains client satisfaction through continuous
              improvement of the Quality Management System.
            </p>
          </section>
        </TabsContent>
        <TabsContent value="curriculum">
          <section className="prose mt-4 max-w-none">
            <h2>School Curriculum</h2>
            <p>
              Santa Rosa Science and Technology High School adopts a Science,
              Technology, and Engineering (STE) Curriculum anchored with the SHS
              Academic Track STEM (Science, Technology, Engineering, and
              Mathematics) Strand of the Philippines&apos; K to 12 Educational
              Program. It is focused on pure science and its application to
              industry using the latest technologies, Computer rooms are to be
              linked to the internet, including multi-media classrooms.
              Instruction shall be supplemented with visits to known science
              institutions, laboratories & plants. The school shall maintain a
              well-stocked library, and subscribe to professional, scientific,
              and technological magazines and manuals.
            </p>
          </section>
        </TabsContent>
        <TabsContent value="facilities">
          <section className="prose mt-4 max-w-none">
            <h2>School Facilities</h2>
            <p>
              School facilities improve the quality of the study environment in
              the school, thus improving the quality of education. Proper
              facilities give teachers and students a safe space to teach as
              well as one that is beneficial for their physical and emotional
              health.
            </p>
            <h3>Laboratories</h3>
            <ul>
              <li>Chemistry</li>
              <li>Computer Science</li>
              <li>Physics</li>
              <li>Speech</li>
              <li>Biology</li>
              <li>Mathematics</li>
              <li>General Science</li>
            </ul>
            <h3>Student Services</h3>
            <ul>
              <li>Accounting Office</li>
              <li>Library</li>
              <li>Registrar</li>
              <li>Canteen</li>
              <li>Guidance</li>
              <li>Sports</li>
              <li>Clinic</li>
            </ul>
          </section>
        </TabsContent>
        <TabsContent value="organizational-chart">
          <section className="prose mt-4 max-w-none">
            <h2>Organizational Chart</h2>

            <div className="w-[100vw] ml-[calc(50%-50vw)]">
              <div className="py-4">
                <ExecutiveProfile
                  name="Alvin D. Sta. Maria, EdD"
                  role="Principal III"
                  imageUrl="/assets/executives/principal.jpg"
                />
              </div>

              <div className="bg-neutral-200 py-4">
                <ExecutiveProfile
                  name="Honeylet H. Terrible"
                  role="Administrative Officer"
                  imageUrl="/assets/executives/ao.jpg"
                />
              </div>

              <div className="py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
		  <ExecutiveProfile
		    name="Gladysma Kate E. Ruga, RGC, RPm"
		    role="Guidance Counselor II"
		    imageUrl="/assets/executives/guidance.jpg"
		  />
                  <ExecutiveProfile
                    name="Riza Jane De Castro"
                    role="Registrar"
                    imageUrl="/assets/executives/registrar.jpg"
                  />
                  <ExecutiveProfile
                    name="Jayson T. Mallonga, EdD"
                    role="School Activity Coordinator"
                    imageUrl="/assets/executives/sac.jpg"
                  />
		</div>
              </div>

              <div className="bg-neutral-200 py-4">
                <h3 className="text-center">Head Teachers</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <ExecutiveProfile
                    name="Marilyn C. Santos"
                    role="Head Teacher II &ndash; Science"
                    imageUrl="/assets/executives/ht/sci.jpg"
                  />
                  <ExecutiveProfile
                    name="Maria Cecilla D. Vitug"
                    role="Head Teacher II &ndash; Math, MAPEH, TLE"
                    imageUrl="/assets/executives/ht/math.jpg"
                  />
                  <ExecutiveProfile
                    name="Rozenda A. Mi&ntilde;oza"
                    role="Head Teacher I &ndash; Communication Arts"
                    imageUrl="/assets/executives/ht/arts.jpg"
                  />
                </div>
              </div>

              <div className="py-4">
                <h3 className="text-center">Master Teachers</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                  <ExecutiveProfile
                    name="Joralie J. Mendoza, PhD"
                    role="Master Teacher II"
                    imageUrl="/assets/executives/mt/mendoza.jpg"
                  />
                  <ExecutiveProfile
                    name="Enerito M. Clima, PhD"
                    role="Master Teacher II"
                    imageUrl="/assets/executives/mt/clima.jpg"
                  />
                  <ExecutiveProfile
                    name="Mariel Y. Castillo"
                    role="Master Teacher II"
                    imageUrl="/assets/executives/mt/castillo.jpg"
                  />
                  <ExecutiveProfile
                    name="Chriselleen Jazel D. Pasilan"
                    role="Master Teacher II"
                    imageUrl="/assets/executives/mt/pasilan.jpg"
                  />
                  <ExecutiveProfile
                    name="Mike Angelo B. Estopace"
                    role="Master Teacher I"
                    imageUrl="/assets/executives/mt/estopace.jpg"
                  />
                  <ExecutiveProfile
                    name="Maria Cristina R. Miranda, EdD"
                    role="Master Teacher I"
                    imageUrl="/assets/executives/mt/miranda.jpg"
                  />
                  <ExecutiveProfile
                    name="Hazel T. Edrozo"
                    role="Master Teacher I"
                    imageUrl="/assets/executives/mt/edrozo.jpg"
                  />
                </div>
              </div>

              <div className="bg-neutral-200 py-4">
                <h3 className="text-center">Key Teachers</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                  <ExecutiveProfile
                    name="Regina B. Salipot"
                    role="Grade 7 Key Teacher"
                    imageUrl="/assets/executives/kt/7.jpg"
                  />
                  <ExecutiveProfile
                    name="Jocelyn B. Gregorio"
                    role="Grade 8 Key Teacher"
                    imageUrl="/assets/executives/kt/8.jpg"
                  />
                  <ExecutiveProfile
                    name="Dolores V. Cruz"
                    role="Grade 9 Key Teacher"
                    imageUrl="/assets/executives/kt/9.jpg"
                  />
                  <ExecutiveProfile
                    name="Janeza T. Alignay"
                    role="Grade 10 Key Teacher"
                    imageUrl="/assets/executives/kt/10.jpg"
                  />
                  <ExecutiveProfile
                    name="Shinah Jasmin R. Miranda"
                    role="Grade 11 Key Teacher"
                    imageUrl="/assets/executives/kt/11.jpg"
                  />
                  <ExecutiveProfile
                    name="Mike Angelo B. Estopace"
                    role="Grade 12 Key Teacher"
                    imageUrl="/assets/executives/kt/12.jpg"
                  />
                </div>
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </main>
  )
}
