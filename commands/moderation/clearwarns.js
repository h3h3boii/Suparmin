module.exports = {
  name: "clearwarns",
  aliases: ["clearwarns", "removewarns"],
  code: `$color[ff00ff]

$onlyPerms[manageroles;You cannot use this command]$argsCheck[>1;Please Mention Someone!]

$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];-1];$mentioned[1]]

$title[**$username[$mentioned[1]]**'s Warnings Has been removed by $username]

$suppressErrors[You Must Mention Someone!]`
}
//hello