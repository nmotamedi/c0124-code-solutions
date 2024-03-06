interface Park {
  fullName: string,
  designation: string,
  parkCode: string,
}

const url = 'https://developer.nps.gov/api/v1/parks?limit=500';
const headers = {
  'X-Api-Key': 'etA2FldfC7HhYmqU7qvOsi5HIeCezAaSefRG26Hk',
};

async function getParkData (): Promise<void> {
  try {
    const resp = await fetch(url, {headers: headers});
    if (!resp.ok) throw new Error("Network Error");
    const allParkData = await resp.json();
    const npParkData = allParkData.data.filter((park: Park) => {
      return (
        park.designation === 'National Park' ||
        park.designation === 'National Park & Preserve' ||
        park.designation === 'National Parks' ||
        park.designation === 'National and State Parks' ||
        park.parkCode === "npsa"
      );
    });
    const npParkNames = npParkData.map((park: Park) => park.fullName);
    console.log(npParkData);
  }
  catch (e) {
    console.error(e);
  }
}

getParkData();
