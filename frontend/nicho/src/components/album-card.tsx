import Image from "next/image";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Album } from "@/models/Album";

interface AlbumCardProps {
  albumInfo: Album
}


export function AlbumCard({ albumInfo }: AlbumCardProps) {

  return (
    <React.Fragment>
      <Card>
        <CardHeader style={{display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center"}}>
          <CardTitle>
            <Image alt={albumInfo.albumName} src={albumInfo.image} width={100} height={100} />
          </CardTitle>
          <CardDescription>
            <h4>{albumInfo.albumName}</h4>
            <h6>{albumInfo.band}</h6>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h2>{albumInfo.listenedTracks}/{albumInfo.totalTracks}</h2> <h4> icone de album escutado</h4>
        </CardContent>
      </Card>
    </React.Fragment>
  )

}