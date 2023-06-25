Class WorkOffer
{
    [string]$title
    [string]$description
    [datetime]$pubDate
    [string]$link
    [string]$guid
    [string]$source
}

Class upwork:WorkOffer
{

    upwork($DataStream)
    {
        $this.source = "upwork"
        $this.title = $DataStream.title.'#cdata-section'
        $this.description = $DataStream.description.'#cdata-section'
        $this.pubDate = [datetime]$DataStream.pubDate
        $this.link = $DataStream.link
        $this.guid = $DataStream.guid
    }
}

Class indeed:WorkOffer
{

    indeed($DataStream)
    {
        $this.source = "indeed"
        $this.title = $DataStream.title
        $this.description = $DataStream.description
        $this.pubDate = [datetime]$DataStream.pubDate
        $this.link = $DataStream.link
        $this.guid = $DataStream.guid.'#text'
    }
}


$URLList = @{
    upwork="https://www.upwork.com/ab/feed/jobs/rss?q=powershell&sort=recency&job_type=hourly&workload=as_needed%2Cpart_time&paging=0%3B10&api_params=1&securityToken=446af7599c957d0e155e649c382ead5d64e8b4f133b95b11866343725a4c55707d8782bb8ad41d620274092ffd56e71741c0899845c6810183950e63430533ce&userUid=819586264847613952&orgUid=819586264847613954";
    indeed="https://www.indeed.com/rss?q=powershell&l=Remote&sc=0kf%3Aattr%28DSQF7%29%3B&vjk=e9edeeef61591e19"
}

while($true)
{
    [WorkOffer[]]$Ext = @()

    $URLList.Keys | foreach-object{

        $type = $_

            $Data = Invoke-RestMethod $URLList.$type
            $Data | foreach-object{
            
                if([datetime]$_.PubDate -gt (get-date).Date)
                {
                    $Ext += New-Object -TypeName $type -ArgumentList $_
                }
        }

    }

    Clear-Host
    $Ext | Sort-Object pubDate -Descending | Select-Object pubDate,title,source,link | Format-Table
    Start-Sleep -Seconds 600

}