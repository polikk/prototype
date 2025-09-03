export const samtykkeList = [
  {
    'Fil': 'Samtykke-barn-2025-06-01.pdf',
    'Sendt dato': '01.06.2025',
    'Sendt av': 'Kari Nordmann',
    'Sendt til': 'Ola Nordmann (far)',
    'Status': 'Venter',
    'Signert': ''
  },
  {
    'Fil': 'Samtykke-oppdatering-2025-04-15.pdf',
    'Sendt dato': '15.04.2025',
    'Sendt av': 'Anne Hansen',
    'Sendt til': 'Per Persen (verge)',
    'Status': 'Avvist',
    'Signert': ''
  },
  {
    'Fil': 'Samtykke-tillegg-2025-08-10.pdf',
    'Sendt dato': '10.08.2025',
    'Sendt av': 'Sara Larsen',
    'Sendt til': 'Lise Olsen (mor)',
    'Status': 'Godkjent',
    'Signert': '11.08.2025'
  },
  {
    'Fil': 'Samtykke-ny-2025-07-22.pdf',
    'Sendt dato': '22.07.2025',
    'Sendt av': 'Morten Berg',
    'Sendt til': 'Frank Nilsen (far)',
    'Status': 'Venter',
    'Signert': ''
  }
];

export function groupSamtykkeByStatus(list) {
  const grouped = {};
  for (const item of list) {
    const status = item.Status || 'Ukjent';
    if (!grouped[status]) grouped[status] = [];
    grouped[status].push(item);
  }
  return grouped;
}
