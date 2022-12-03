# For reference only: https://learn.microsoft.com/en-us/sharepoint/dev/solution-guidance/configuring-the-pnp-provisioning-engine
Connect-PnPOnline https://piasysdev.sharepoint.com/sites/M365Conf2022/ -Credentials PiaSysDev-Paolo
Get-PnPSiteTemplate -Configuration ./extract-config.json -Out events-template.xml
