import { clarity } from 'clarity-js'
import { useEffect } from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { UserInfo } from './pages/UserInfo'
import { UserProfile } from './pages/UserProfile'

import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'

const options = {
    init: {
        session_replay: {
            enabled: true,
            block_selector: '',
            mask_text_selector: '*',
            sampling_rate: 10.0,
            error_sampling_rate: 100.0,
            mask_all_inputs: true,
            collect_fonts: true,
            inline_images: false,
            inline_stylesheet: true,
            fix_stylesheets: true,
            preload: false,
            mask_input_options: {},
        },
        distributed_tracing: { enabled: true },
        privacy: { cookies_enabled: true },
        ajax: { deny_list: ['bam.nr-data.net'] },
    },
    info: {
        beacon: 'bam.nr-data.net',
        errorBeacon: 'bam.nr-data.net',
        licenseKey: 'NRJS-9e935e7cfff5f20a5d1',
        applicationID: '1589067086',
        sa: 1,
    },
    loader_config: {
        accountID: '6592502',
        trustKey: '6592502',
        agentID: '1589067086',
        licenseKey: 'NRJS-9e935e7cfff5f20a5d1',
        applicationID: '1589067086',
    },
}

new BrowserAgent(options)

export function App() {
  useEffect(() => {
    clarity.consent()

    clarity.set('user_id', '25051995')
    clarity.set('user_email', 'karinebrandelli@live.com')
    clarity.set('user_name', 'karine')

    clarity.start({
      projectId: 'r0hcyguxdv',
      upload: 'https://m.clarity.ms/collect',
      track: true,
      content: true,
      cookies: ['user_id', 'user_email', 'user_name', 'user_organization'],
    })

    return () => {
      clarity.stop()
    }
  }, [])

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </HashRouter>
    </>
  )
}
