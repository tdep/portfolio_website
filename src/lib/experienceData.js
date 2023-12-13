import 'server-only'

export async function getExperienceData() {
  const res = await fetch('http://localhost/:3000/api/experience', {
    headers: {
      method: 'GET'
    }
  })

  return res.json()
}