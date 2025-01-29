# Personal Website

My website and resume are generated using Gatsby, Bulma, `react-pdf`, and Contentful.

## Design/Development Process

For a long time, I was unsure what I wanted my personal website to look like.
All I knew was that I wanted it to be elegant. It had to:

- Be easy to find information
- Have a UI that combines the functionality of the 90s era web with the beauty 
  of the modern web
- Be **fast**
- Be easy to update
  
It's no secret that a lot of websites don't check enough of these bullets.
Unfortunately, every website has to make sacrifices, including mine, but I sought
to check as many of those bullets as I could.

#### Iteration 1

The first iteration of my website used [a Bootstrap template](https://github.com/StartBootstrap/startbootstrap-resume)
as most do, and it was _okay_. At that time, I was an underclassman in college and
didn't have a ton to fill out my resume with anyway, so I wasn't concerned that it
wasn't perfect. At that point, I was happy that it was easily expandable, looked relatively
clean, and didn't look like a Bootstrap template.

#### Iteration 2

Eventually, after I got my first full time job, I realized that while the first iteration 
had served me well, I was ready for something better. I had been exposed to more of
the web development world, and I wanted something that fit my needs better.

What helped jump start my transition was a [local meetup](https://clereact.dev/) meeting
teaching how easy it was to make a website with Gatsby and Contentful. As you'll read, it
actually is quite easy.

**Information I Wanted on my Website**

At first, I wasn't _really_ sure what I wanted on my website. Probably my name,
school, and contact info, but past that, I just knew having an online presence was good.
At this point, I knew I wanted:

- One page that housed the same information as my resume, but presented in a more beautiful
  way, and with the ability to print as a PDF
- One page for my musical achievements - my compositions, arrangements, and performances

While this didn't directly inform my design choices, I think it's important to document, as
the information on the site is the most important part. If the site isn't designed around the
information it's communicating or the services it's providing, users will not enjoy using it.

**Deciding on a Tech Stack**

As discussed earlier, the initial spark into this project was Gatsby. It isn't necessarily groundbreaking,
but I loved how easy it made both information aggregation and server side rendering. I could have used
Next.js for SSR, and I did on future projects, but the information aggregation sold me.

I also decided to use Contentful for my CMS. There wasn't too much decision making here - 
Contentful works well with Gatsby, and is easy to use. I could have probably used others, but
I didn't need much out of a CMS.

**Deciding on a Design**

The decision process for a library was relatively short. I wanted a library with pre-made components,
but something less clunky than Bootstrap. I investigated several libraries, but landed on [Bulma](https://bulma.io/).
Bulma is clean, has the usual pre-made components, in addition to some other commonly used 
components such as modals and boxes.

In terms of content, I knew from the beginning I wanted my resume and my music on my website, so I 
decided it was that simple and kept the site to two pages. One for my resume, and one for my music.

There was a lot of tinkering involved, but eventually I landed on a design that was elegant enough to
meet my standards while still not polluting the information with too much design.

**Deploying/Editing Post Development**

One of my goals was to make my website as easy as humanly possible to edit after deployed.
In my initial approach, using Jekyll, this was easy, but still required making additional commits
to the code. Now, using Contentful, it's incredibly easy! I edit information, hit rebuild, and
everything is up to date without touching code. The deployment process is subject to change,
but the CMS is a welcome addition.

## Running Locally

To run locally, copy `.env.example`, and fill out values for the keys. Then,
it is all runnable via `npm`

    $ cp .env.example .env
    $ # Fill in values for .env
    $ npm install
    $ npm start
