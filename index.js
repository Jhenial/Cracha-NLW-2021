const LinksSocialMedia = {
  github: 'jhenial',
  youtube: 'UCSCL66l-N2Xvk0jxdIQechQ',
  twitter: 'jheikelly',
  instagram: 'sesonaeducacao'
}

function changeSocialMediaLinks() {
  userName.textContent = 'Jeniffer Alves'
}

changeSocialMediaLinks()

function getGitHubProfileinfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}
getGitHubProfileinfos()
