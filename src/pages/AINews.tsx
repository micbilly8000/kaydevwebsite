import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom'
import { posts, categories, formatDate, Post, PostCategory } from '@data/posts'
import { BOOKING_URL, EMAIL } from '@components/site'

const SUBSCRIBE_HREF = `mailto:${EMAIL}?subject=Subscribe%20to%20AI%20News%20%26%20Strategy&body=Please%20add%20me%20to%20the%20KayDev%20AI%20News%20%26%20Strategy%20list.`

/** Generated cover art, so posts never depend on stock photos. */
const Cover: React.FC<{ variant: Post['cover']; className?: string }> = ({ variant, className }) => {
  const shapes: Record<Post['cover'], React.ReactNode> = {
    grid: Array.from({ length: 48 }, (_, i) => (
      <rect key={i} x={20 + (i % 8) * 46} y={20 + Math.floor(i / 8) * 34} width="30" height="20" rx="4"
        fill={i % 7 === 0 ? '#3fbf8f' : i % 5 === 0 ? '#7fd6b3' : '#1d2b25'} />
    )),
    rings: [80, 62, 44, 26].map((r, i) => (
      <circle key={r} cx="300" cy="120" r={r} fill="none" stroke={i === 1 ? '#3fbf8f' : '#27322d'} strokeWidth={i === 1 ? 8 : 6} />
    )).concat([<circle key="dot" cx="300" cy="120" r="10" fill="#7fd6b3" />, <circle key="dot2" cx="110" cy="80" r="6" fill="#3fbf8f" />, <circle key="dot3" cx="150" cy="170" r="4" fill="#7fd6b3" />]),
    bars: [60, 110, 85, 150, 120, 175, 140].map((h, i) => (
      <rect key={i} x={50 + i * 46} y={210 - h} width="30" height={h} rx="5" fill={i === 5 ? '#3fbf8f' : '#27322d'} />
    )),
    wave: [0, 1, 2, 3].map((k) => (
      <path key={k} d={`M0 ${150 - k * 28} C 100 ${90 - k * 28}, 200 ${210 - k * 28}, 400 ${120 - k * 28}`} fill="none"
        stroke={k === 2 ? '#3fbf8f' : '#27322d'} strokeWidth={k === 2 ? 7 : 5} />
    )),
    nodes: (() => {
      const pts = [[70, 70], [160, 50], [250, 100], [330, 60], [110, 160], [210, 180], [320, 170]]
      const edges = [[0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 2], [5, 6], [2, 6]]
      return [
        ...edges.map(([a, b], i) => <line key={'e' + i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke="#27322d" strokeWidth="4" />),
        ...pts.map(([x, y], i) => <circle key={'n' + i} cx={x} cy={y} r={i === 2 ? 14 : 9} fill={i === 2 ? '#3fbf8f' : '#7fd6b3'} />),
      ]
    })(),
  }
  return (
    <svg className={`cover ${className ?? ''}`} viewBox="0 0 400 240" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="240" fill="#0e1512" />
      {shapes[variant]}
    </svg>
  )
}

const Meta: React.FC<{ post: Post }> = ({ post }) => (
  <p className="post-meta"><span className="post-cat">{post.category}</span>{formatDate(post.date)} · {post.readMinutes} min read</p>
)

const SubscribeBox: React.FC = () => (
  <div className="side-box">
    <div className="side-brand">
      <img src="/brand/kaydev-mark.png" alt="" width={36} height={36} />
      <h3>AI News &amp; Strategy</h3>
    </div>
    <p>Practical notes on AI strategy, AI security and building AI teams, for leaders who are past the hype and ready to build.</p>
    <a className="btn btn-primary" href={SUBSCRIBE_HREF}>Get new posts by email</a>
  </div>
)

export const AINews: React.FC = () => {
  const [params, setParams] = useSearchParams()
  const active = (params.get('topic') as PostCategory | null) ?? null
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const popular = posts.filter((p) => p.popular && p.slug !== featured.slug).slice(0, 3)
  const topics = categories.filter((c) => posts.some((p) => p.category === c))
  const list = useMemo(() => (active ? posts.filter((p) => p.category === active) : posts), [active])

  return (
    <>
      <Helmet>
        <title>AI News &amp; Strategy | KayDev Technology</title>
        <meta name="description" content="AI strategy, AI security and AI staffing insights from KayDev Technology, for leaders who are ready to build." />
      </Helmet>

      <div className="news-top">
        <div className="wrap">
          <p className="kicker">KayDev insights</p>
          <h1>AI News &amp; Strategy</h1>
          <p className="lede">Practical AI strategy, security and implementation for leaders who are past the hype and ready to build.</p>
          <nav className="topic-tabs" aria-label="Topics">
            <button className={!active ? 'on' : ''} onClick={() => setParams({})}>All</button>
            {topics.map((c) => (
              <button key={c} className={active === c ? 'on' : ''} onClick={() => setParams({ topic: c })}>{c}</button>
            ))}
          </nav>
        </div>
      </div>

      {!active && (
        <>
          <div className="wrap">
            <Link to={`/ai-news/${featured.slug}`} className="featured">
              <Cover variant={featured.cover} />
              <div>
                <Meta post={featured} />
                <h2>{featured.title}</h2>
                <p>{featured.subtitle}</p>
                <span className="read-more">Read the post →</span>
              </div>
            </Link>
          </div>

          {popular.length > 0 && (
            <div className="wrap popular">
              <div className="sub-head"><h2>Most popular</h2></div>
              <div className="grid grid-3">
                {popular.map((p) => (
                  <Link key={p.slug} to={`/ai-news/${p.slug}`} className="pop-item">
                    <div><h3>{p.title}</h3><Meta post={p} /></div>
                    <Cover variant={p.cover} className="thumb" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      <div className="wrap news-body">
        <div>
          <div className="sub-head"><h2>{active ?? 'Recent posts'}</h2><span>{list.length} posts</span></div>
          <ul className="post-list">
            {list.map((p) => (
              <li key={p.slug}>
                <Link to={`/ai-news/${p.slug}`}>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.subtitle}</p>
                    <Meta post={p} />
                  </div>
                  <Cover variant={p.cover} className="thumb" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <aside>
          <SubscribeBox />
          <div className="side-box">
            <h4>About our sources</h4>
            <p className="side-note">Posts are written by the KayDev team from our own client work. When a post relies on an outside standard, report or news story, the original source is linked at the end of the post.</p>
          </div>
          <div className="side-box">
            <h4>From KayDev</h4>
            <ul className="side-links">
              <li><Link to="/#ai-services">AI security assessments</Link></li>
              <li><Link to="/#staffing">AI, IT and cyber staffing</Link></li>
              <li><a href="https://www.kaydevai.com" rel="noopener">KayDev AI</a></li>
              <li><a href={BOOKING_URL} target="_blank" rel="noopener">Book a call</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  )
}

export const AINewsPost: React.FC = () => {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/ai-news" replace />
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{post.title} | KayDev Technology</title>
        <meta name="description" content={post.subtitle} />
      </Helmet>
      <article className="wrap article">
        <Link to="/ai-news" className="back">← AI News &amp; Strategy</Link>
        <Meta post={post} />
        <h1>{post.title}</h1>
        <p className="article-sub">{post.subtitle}</p>
        <p className="byline">By {post.author}</p>
        <Cover variant={post.cover} className="article-cover" />
        <div className="prose">
          {post.body.map((b, i) =>
            'p' in b ? <p key={i}>{b.p}</p>
              : 'h2' in b ? <h2 key={i}>{b.h2}</h2>
                : 'ul' in b ? <ul key={i}>{b.ul.map((li) => <li key={li}>{li}</li>)}</ul>
                  : <blockquote key={i}>{b.quote}</blockquote>
          )}
        </div>
        {post.sources && post.sources.length > 0 && (
          <section className="sources" aria-labelledby="sources-h">
            <h2 id="sources-h">Sources and further reading</h2>
            <ol>
              {post.sources.map((src) => (
                <li key={src.url}>
                  {src.publisher}{src.date ? ` (${src.date})` : ''}.{' '}
                  <a href={src.url} target="_blank" rel="noopener">{src.title}</a>.
                </li>
              ))}
            </ol>
          </section>
        )}
        <p className="editorial-note">Written by the KayDev team from our own practice. Outside material is credited and linked above where we rely on it. This article is general information, not legal or compliance advice.</p>
        <div className="article-cta">
          <div>
            <h3>Talk to KayDev</h3>
            <p>Get help with AI strategy, AI security assessments or the people to deliver them.</p>
          </div>
          <div className="actions">
            <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener">Book a call</a>
            <a className="btn btn-ghost" href={SUBSCRIBE_HREF}>Get new posts by email</a>
          </div>
        </div>
      </article>
      <div className="wrap more-posts">
        <div className="sub-head"><h2>More posts</h2><Link to="/ai-news">View all</Link></div>
        <div className="grid grid-3">
          {more.map((p) => (
            <Link key={p.slug} to={`/ai-news/${p.slug}`} className="card-link">
              <Cover variant={p.cover} />
              <Meta post={p} />
              <h3>{p.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
