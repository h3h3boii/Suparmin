module.exports = {
  name: "lock", 
  code: `$modifyChannelPerms[$channelID;-sendmessages;$guildID]
$color[ffffff]
$title[**Channel Has Been Locked | :white_check_mark:**]
$description[<#$channelID> **Has Been Locked By $username**]
$onlyPerms[managechannels;You cannot use this command]
`
}