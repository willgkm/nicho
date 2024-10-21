import { AlbumCard } from "@/components/album-card";
import { Album } from "@/models/Album";
import React from "react";

export default function Home() {

  const albuns: Album[]= [
    {
      id: 1,
      image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
      albumName: "Album 1",
      band: "Banda A",
      listenedTracks: 5,
      totalTracks: 10,
      listened: false,
      albumLink: "/album/1",
    },
    {
      id: 2,
      image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
      albumName: "Album 2",
      band: "Banda B",
      listenedTracks: 8,
      totalTracks: 8,
      listened: true,
      albumLink: "/album/2",
    },
    {
      id: 3,
      image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
      albumName: "Album 3",
      band: "Banda C",
      listenedTracks: 12,
      totalTracks: 12,
      listened: true,
      albumLink: "/album/3",
    },
    {
      id: 4,
      image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
      albumName: "Album 4",
      band: "Banda D",
      listenedTracks: 3,
      totalTracks: 10,
      listened: false,
      albumLink: "/album/4",
    },
    {
      id: 5,
      image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
      albumName: "Album 5",
      band: "Banda E",
      listenedTracks: 10,
      totalTracks: 10,
      listened: true,
      albumLink: "/album/5",
    },
    {
      id: 6,
      image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
      albumName: "Album 6",
      band: "Banda F",
      listenedTracks: 4,
      totalTracks: 7,
      listened: false,
      albumLink: "/album/6",
    },
    {
      id: 7,
      image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
      albumName: "Album 7",
      band: "Banda G",
      listenedTracks: 6,
      totalTracks: 6,
      listened: true,
      albumLink: "/album/7",
    },
    {
      id: 8,
      image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
      albumName: "Album 8",
      band: "Banda H",
      listenedTracks: 2,
      totalTracks: 8,
      listened: false,
      albumLink: "/album/8",
    },
    {
      id: 9,
      image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
      albumName: "Album 9",
      band: "Banda I",
      listenedTracks: 7,
      totalTracks: 7,
      listened: true,
      albumLink: "/album/9",
    },
    {
      id: 10,
      image: "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
      albumName: "Album 10",
      band: "Banda J",
      listenedTracks: 0,
      totalTracks: 9,
      listened: false,
      albumLink: "/album/10",
    }
  ];


  return (

    <React.Fragment>
      <div
        style={{
          margin:"auto auto"
        }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px"
        }}>

          {albuns.map((item) =>
            <React.Fragment key={item.id} >
              <AlbumCard albumInfo={item} />
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}
