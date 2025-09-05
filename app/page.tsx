import Link from 'next/link'
import { ProjectPostsSimple } from 'app/components/posts'

export default function Page() {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-24 xl:px-32">
      {/* Main Hero Section */}
      <section className="py-16">
        <div className="flex items-start gap-16">
          {/* Vertical About Label */}
          <div className="flex-shrink-0">
            <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider writing-mode-vertical-rl transform rotate-180">
              About
            </h2>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-12 text-neutral-900 leading-tight">
              I <span className="text-neutral-500">Code</span> to Create and Innovate.
            </h1>

            <div className="space-y-6 text-neutral-600 leading-relaxed max-w-4xl">
              <p className="text-lg">
                Hi, I'm Thi. I'm a final-year Computer Science student with big dreams and an even bigger coffee addiction. My mission? To become a top-notch IT expert and code my way to a brighter, tech-savvy future. I'm on an epic journey of learning and growth, fueled by a passion for developing software that makes a real difference.
              </p>

              <p className="text-lg">
                Through my projects, I strive to create innovative solutions that users love and that solve everyday problems (and maybe a few extraordinary ones). I firmly believe in the magic of technology to transform lives and make the world a bit more awesome.
              </p>

              <p className="text-lg">
                With determination, a sprinkle of creativity, and a whole lot of empathy, I'm committed to making meaningful and lasting contributions to the tech world. So, buckle up and join me on this wild ride as I chase my dreams, one line of code at a time. Let's make some tech magic happen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-16">
        <div className="flex items-start gap-16">
          {/* Vertical Projects Label */}
          <div className="flex-shrink-0">
            <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider writing-mode-vertical-rl transform rotate-180">
              Projects
            </h2>
          </div>

          {/* Projects Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-8 text-neutral-900">Latest Projects</h3>
            <ProjectPostsSimple />
          </div>
        </div>
      </section>

      {/* Participations Section */}
      <section className="py-16">
        <div className="flex items-start gap-16">
          {/* Vertical Participations Label */}
          <div className="flex-shrink-0">
            <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider writing-mode-vertical-rl transform rotate-180">
              Participations
            </h2>
          </div>

          {/* Participations Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-8 text-neutral-900">Participations</h3>

            {/* E³UDRES² Hackathon */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-neutral-900">E³UDRES² European University Hackathon</h4>
                <p className="text-sm text-neutral-500 mb-4">February 2024 • Leuven, Belgium</p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">What</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">EUDRES "Talent Portal" Hackathon</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Where</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">Leuven, Belgium</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">When</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">2024</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <div>
                  <p className="mb-4">
                    The challenge "Talent Portal" focused on developing an innovative platform to match talents with companies. I joined an amazing innovation team, where we brainstormed and developed a compelling business plan and created prototypes for the platform.
                  </p>
                  <p>
                    Switching gears, I also collaborated with the coding team, writing and testing algorithms designed to perfectly match talents to the right companies. Both teams were incredibly motivating, pushing us to tackle problems head-on and find creative solutions.
                  </p>
                </div>

                <div>
                  <p className="mb-4">
                    The hackathon wasn't just about the intense coding and planning; it was also about the connections made. I met a diverse group of talented individuals who were just as passionate about solving the challenges of talent acquisition as I am.
                  </p>
                  <p>
                    Working alongside these brilliant minds was not only a pleasure but also an enriching experience that broadened my perspective. The ideas and concepts we developed are just the beginning, and I can't wait to see them come to life.
                  </p>
                </div>
              </div>
            </div>

            {/* SIVIBI Leadership */}
            <div className="space-y-6 mt-12">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-neutral-900">Head of Human Resources - SIVIBI</h4>
                <p className="text-sm text-neutral-500 mb-4">2022 • Vietnamese Student Association in Belgium</p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Role</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">Head of Human Resources</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Organization</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">SIVIBI</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Event</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">Belcome 2022-2023</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <div>
                  <p className="mb-4">
                    In 2022, I led "Belcome 2022-2023," an epic welcome event for over 70 new Vietnamese students in Belgium. As the Head of HR at SIVIBI, I was the mastermind behind the scenes, responsible for planning everything down to the last detail.
                  </p>
                  <p>
                    This involved a whirlwind of team meetings, endless to-do lists, and a few too many late-night coffee runs. Despite the chaos, we pulled off an event that was warm, inclusive, and downright fun.
                  </p>
                </div>

                <div>
                  <p className="mb-4">
                    The experience taught me about the magic of community and the importance of good leadership—and that a little humor goes a long way in turning challenges into successes.
                  </p>
                  <p>
                    Working with such a diverse group of students and creating an environment where everyone felt welcome was incredibly rewarding. It showed me the power of bringing people together and the impact of thoughtful event planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
