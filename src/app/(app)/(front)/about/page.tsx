import {OrganizationalChart} from '@/components/organizational-chart/Chart'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {fetchCachedMediaByName} from '@/lib/cached'
import Image from 'next/image'

export const metadata = {
  title: 'About Us | Santa Rosa Science and Technology High School',
  description: 'Learn about Santa Rosa Science and Technology High School'
}

const logoDetails = [
  {
    title: 'The open-winged eagle',
    text: 'Represents the strong determination to move forward towards prosperity, the year 2002 for the birth of SciTech High, and the ribbon held on its beak for respect in God.'
  },
  {
    title: 'The two upright concrete posts of the Santa Rosa Arch',
    text: 'Represent the strong support of the City Government and its populace.'
  },
  {
    title: 'The building',
    text: 'Represents the growth of trade and industries.'
  },
  {
    title: 'The wheel, computer, and space satellite',
    text: 'Represent advancement in transportation and communication.'
  },
  {
    title: 'The test tubes, flasks, atoms, and rays',
    text: 'Represent continuing studies in the field of science.'
  },
  {
    title: 'The blue and yellow background',
    text: 'Symbolizes love and loyalty for our country and our highest aspirations.'
  },
  {
    title: 'The DepEd shield',
    text: 'Represents the supportive and protective government umbrella in high school education.'
  }
]

const laboratories = [
  'Chemistry',
  'Computer Science',
  'Physics',
  'Speech',
  'Biology',
  'Mathematics',
  'General Science'
]

const studentServices = [
  'Accounting Office',
  'Library',
  'Registrar',
  'Canteen',
  'Guidance',
  'Sports',
  'Clinic'
]

const coreValues = ['Maka-Diyos', 'Maka-tao', 'Makakalikasan', 'Makabansa']

const sectionCardClass = 'rounded-md border border-gray-200 bg-white shadow-sm'
const infoCardClass = 'rounded-md border border-gray-200 bg-gray-50'

function SectionEyebrow({children}: {children: React.ReactNode}) {
  return (
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue-default">
      {children}
    </p>
  )
}

function PillList({items}: {items: string[]}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(item => (
        <li
          key={item}
          className="rounded-md border border-gray-200 bg-white px-4 py-3 font-semibold text-gray-800 shadow-sm">
          {item}
        </li>
      ))}
    </ul>
  )
}

export default async function About() {
  const logoSrc = await fetchCachedMediaByName('SRSTHS logo')
  const heroImageSrc = await fetchCachedMediaByName('Hero image')

  return (
    <main className="space-y-10">
      <section className="relative -mt-6 flex min-h-[58vh] overflow-hidden [margin-inline:calc(50%-50vw)]">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{backgroundImage: `url(${heroImageSrc})`}}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <div className="flex min-h-[58vh] w-full flex-col justify-center px-8 py-12 text-white sm:px-12 lg:px-16">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow-default">
            About SRSTHS
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            Science, service, and community in Santa Rosa.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90">
            Learn the story, symbols, mission, curriculum, facilities, and
            leadership behind Santa Rosa Science and Technology High School.
          </p>
          <div className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="border-l-4 border-brand-yellow-default pl-4">
              <p className="text-3xl font-bold">2001</p>
              <p className="mt-1 text-sm text-white/80">Founded by law</p>
            </div>
            <div className="border-l-4 border-brand-yellow-default pl-4">
              <p className="text-3xl font-bold">STE</p>
              <p className="mt-1 text-sm text-white/80">Curriculum</p>
            </div>
            <div className="border-l-4 border-brand-yellow-default pl-4">
              <p className="text-3xl font-bold">STEM</p>
              <p className="mt-1 text-sm text-white/80">Senior high track</p>
            </div>
          </div>
        </div>
      </section>

      <Tabs defaultValue="history" className="space-y-8">
        <TabsList className="grid h-auto w-full grid-cols-2 gap-2 rounded-md border border-gray-200 bg-white p-2 shadow-sm md:grid-cols-4 lg:grid-cols-7">
          <TabsTrigger className="h-full whitespace-normal" value="history">
            History
          </TabsTrigger>
          <TabsTrigger className="h-full whitespace-normal" value="logo">
            Logo
          </TabsTrigger>
          <TabsTrigger
            className="h-full whitespace-normal"
            value="mission-vision">
            Vision and Mission
          </TabsTrigger>
          <TabsTrigger
            className="h-full whitespace-normal"
            value="deped-mission-vision">
            DepEd Vision and Mission
          </TabsTrigger>
          <TabsTrigger className="h-full whitespace-normal" value="curriculum">
            Curriculum
          </TabsTrigger>
          <TabsTrigger className="h-full whitespace-normal" value="facilities">
            School Facilities
          </TabsTrigger>
          <TabsTrigger
            className="h-full whitespace-normal"
            value="organizational-chart">
            Organizational Chart
          </TabsTrigger>
        </TabsList>

        <TabsContent value="history">
          <section
            className={`${sectionCardClass} grid gap-8 p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8`}>
            <div>
              <SectionEyebrow>Origin story</SectionEyebrow>
              <h2 className="mt-2 text-3xl font-bold text-gray-950">
                Our History
              </h2>
              <p className="mt-4 text-gray-600">
                The school was built through national legislation and local
                support for science and technology education.
              </p>
            </div>
            <div className="space-y-4 border-l-4 border-brand-yellow-default pl-6 text-lg leading-8 text-gray-700">
              <p>
                President Gloria Macapagal-Arroyo signed into law the Republic
                Act 9083, creating Santa Rosa Science and Technology High School
                on April 8, 2001. Cong. Uliran T. Joaquin of the 1st District
                of Laguna was its principal author.
              </p>
              <p>
                The school started in School Year 2002-2003 through the
                initiative and financial support of the local government of
                Santa Rosa led by Mayor Leon C. Arcillas.
              </p>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="logo">
          <section
            className={`${sectionCardClass} grid gap-8 p-6 lg:grid-cols-[0.7fr_1.3fr] lg:p-8`}>
            <div
              className={`${infoCardClass} flex flex-col items-center justify-center p-8 text-center`}>
              <Image
                src={logoSrc}
                alt="Santa Rosa Science and Technology High School Logo"
                width={220}
                height={220}
                className="rounded-full"
              />
              <h2 className="mt-6 text-3xl font-bold text-gray-950">
                The SciTech Logo
              </h2>
              <p className="mt-3 leading-7 text-gray-600">
                The SciTech logo signifies progress in the community. Each part
                symbolizes a component of progress.
              </p>
            </div>
            <ul className="grid gap-4 md:grid-cols-2">
              {logoDetails.map(detail => (
                <li
                  key={detail.title}
                  className={`${infoCardClass} p-4 leading-7 text-gray-700`}>
                  <strong className="block text-gray-950">
                    {detail.title}
                  </strong>
                  {detail.text}
                </li>
              ))}
            </ul>
          </section>
        </TabsContent>

        <TabsContent value="mission-vision">
          <section className={`${sectionCardClass} p-6 md:p-8`}>
            <div className="mb-8 max-w-3xl">
              <SectionEyebrow>Direction</SectionEyebrow>
              <h2 className="mt-2 text-3xl font-bold text-gray-950">
                Mission and Vision
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className={`${infoCardClass} p-6`}>
                <h3 className="text-2xl font-bold text-gray-950">Vision</h3>
                <p className="mt-4 leading-8 text-gray-700">
                  Santa Rosa Science and Technology High School envisions
                  students who are globally competitive with high morals,
                  responsible, diligent, smart, innovative, adaptive, flexible,
                  confident, patriotic future leaders of our nation produced by
                  highly motivated and committed 21st century professional
                  teachers and school personnel who are spurring growth in
                  character and intelligence through the generous support of
                  dynamic, dedicated, goal-driven, value-oriented external
                  stakeholders.
                </p>
              </div>
              <div className={`${infoCardClass} p-6`}>
                <h3 className="text-2xl font-bold text-gray-950">Mission</h3>
                <p className="mt-4 leading-8 text-gray-700">
                  Through the collaborative effort of all the internal and
                  external stakeholders, Santa Rosa Science and Technology High
                  School will become a child-friendly, gender-sensitive,
                  world-class, world-class, state-of-the-art, green school
                  responsive to the science and technology educational needs of
                  the society towards a Maka-Diyos, Makatao, Makakalikasan,
                  Makabansa community in a highly developed country.
                </p>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="deped-mission-vision">
          <section className={`${sectionCardClass} p-6 md:p-8`}>
            <div className="mb-8 max-w-3xl">
              <SectionEyebrow>Department of Education</SectionEyebrow>
              <h2 className="mt-2 text-3xl font-bold text-gray-950">
                DepEd Mission, Vision, and Core Values
              </h2>
            </div>
            <div className="prose prose-neutral max-w-none">
              <h3>DepEd Vision</h3>
              <blockquote>
                We dream of Filipinos who passionately love their country and
                whose values and competencies enable them to realize their full
                potential and contribute meaningfully to building the nation. As
                a learner-centered public institution, the Department of
                Education continuously improves itself to better serve its
                stakeholders.
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
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-gray-950">
                  Core Values
                </h3>
                <PillList items={coreValues} />
              </div>
              <div className={`${infoCardClass} p-6`}>
                <h3 className="text-2xl font-bold text-gray-950">
                  Quality Policy Statement
                </h3>
                <p className="mt-4 leading-8 text-gray-700">
                  The Department of Education is committed to provide learners
                  with quality basic education that is accessible, inclusive,
                  liberating through proactive leadership, shared governance,
                  evidenced-based policies, responsive curricula, competent
                  personnel, and an enabling learning environment.
                </p>
                <p className="mt-4 leading-8 text-gray-700">
                  The Department upholds the highest standards of conduct and
                  performance to fulfill stakeholders&apos; needs and
                  expectations by adhering to constitutional mandates, statutory,
                  and regulatory requirements, and sustains client satisfaction
                  through continuous improvement of the Quality Management
                  System.
                </p>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="curriculum">
          <section className={`${sectionCardClass} p-6 md:p-8`}>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <SectionEyebrow>Academic program</SectionEyebrow>
                <h2 className="mt-2 text-3xl font-bold text-gray-950">
                  School Curriculum
                </h2>
              </div>
              <p className="text-lg leading-8 text-gray-700">
                Santa Rosa Science and Technology High School adopts a Science,
                Technology, and Engineering (STE) Curriculum anchored with the
                SHS Academic Track STEM (Science, Technology, Engineering, and
                Mathematics) Strand of the Philippines&apos; K to 12 Educational
                Program. It is focused on pure science and its application to
                industry using the latest technologies. Instruction is
                supplemented with visits to known science institutions,
                laboratories, and plants. The school maintains a well-stocked
                library and subscribes to professional, scientific, and
                technological magazines and manuals.
              </p>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="facilities">
          <section className={`${sectionCardClass} p-6 md:p-8`}>
            <div className="mb-8 max-w-3xl">
              <SectionEyebrow>Campus support</SectionEyebrow>
              <h2 className="mt-2 text-3xl font-bold text-gray-950">
                School Facilities
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                School facilities improve the quality of the study environment
                and give teachers and students safe spaces for instruction,
                learning, and well-being.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold text-gray-950">
                  Laboratories
                </h3>
                <PillList items={laboratories} />
              </div>
              <div>
                <h3 className="mb-4 text-2xl font-bold text-gray-950">
                  Student Services
                </h3>
                <PillList items={studentServices} />
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="organizational-chart">
          <section className={`${sectionCardClass} p-6 md:p-8`}>
            <div className="mb-8 max-w-3xl">
              <SectionEyebrow>Leadership</SectionEyebrow>
              <h2 className="mt-2 text-3xl font-bold text-gray-950">
                Organizational Chart
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-700">
                Meet the school leaders and personnel supporting learners,
                teachers, and campus operations.
              </p>
            </div>
            <OrganizationalChart />
          </section>
        </TabsContent>
      </Tabs>
    </main>
  )
}
