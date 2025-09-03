function capitalizeWords(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

function getRandomDate(start, end) {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
function getRandomPeople() {
  const people = [
    'Barnevernet, Politiet',
    'Skole, Helsestasjon',
    'NAV, Barnevernet',
    'Politi, Skole',
    'Helsestasjon, NAV',
    'Barnevernet, Skole',
    'Politi, Helsestasjon',
    'NAV, Politiet'
  ];
  return capitalizeWords(people[Math.floor(Math.random() * people.length)]);
}
function getRandomKoordinator() {
  const names = [
    'Ive Iversen',
    'Kari Nordmann',
    'Ola Nordmann',
    'Per Persen',
    'Anne Hansen',
    'Lise Olsen',
    'Morten Berg',
    'Sara Larsen'
  ];
  return capitalizeWords(names[Math.floor(Math.random() * names.length)]);
}

function randomizeTable() {
  return [
    { col1: capitalizeWords('Opprettet'), col2: getRandomDate(new Date(2024, 0, 1), new Date(2025, 11, 31)) },
    { col1: capitalizeWords('Frist'), col2: getRandomDate(new Date(2025, 0, 1), new Date(2026, 11, 31)) },
    { col1: capitalizeWords('Involverte'), col2: getRandomPeople() },
    { col1: capitalizeWords('Koordinator'), col2: getRandomKoordinator() }
  ];
}

function getRandomMessage() {
  const titles = ['Welcome!', 'Update', 'Reminder', 'Info', 'Alert', 'Note'];
  const messages = [
    'This is a random message.',
    'Accordion component has been updated.',
    'Don’t forget to check the new features.',
    'Please review the latest changes.',
    'Meeting scheduled for next week.',
    'Action required on your part.'
  ];
  const authors = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank'];
  const photos = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
    'https://randomuser.me/api/portraits/women/3.jpg',
    'https://randomuser.me/api/portraits/men/4.jpg',
    'https://randomuser.me/api/portraits/women/5.jpg',
    'https://randomuser.me/api/portraits/men/6.jpg'
  ];
  return {
    title: titles[Math.floor(Math.random() * titles.length)],
    message: messages[Math.floor(Math.random() * messages.length)],
    author: authors[Math.floor(Math.random() * authors.length)],
    date: getRandomDate(new Date(2025, 0, 1), new Date(2025, 11, 31)),
    photoUrl: photos[Math.floor(Math.random() * photos.length)]
  };
}

function getRandomFiles(count = 0) {
  const files = [];
  for (let i = 0; i < count; i++) {
    const name = `file${i + 1}.pdf`;
    const size = Math.floor(Math.random() * 5000000) + 10000;
    const type = 'application/pdf';
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const description = `Opprettet av ${getRandomKoordinator()}, ${day}.${month}.${year}, klokken ${hours}:${minutes}`;
    files.push({ file: { name, size, type }, title: name, description });
  }
  return files;
}

function getRandomSubsubsection(idx) {
  return {
    header: `Tiltak ${idx + 1}`,
    table: randomizeTable(),
    messages: Array.from({ length: Math.floor(Math.random() * 3) + 2 }, () => getRandomMessage()),
    files: getRandomFiles(Math.floor(Math.random() * 2))
  };
}

function getRandomSubsection(idx) {
  return {
    header: `Mål ${idx + 1}`,
    subsubsections: Array.from({ length: Math.floor(Math.random() * 2) + 1 }, (_, i) => getRandomSubsubsection(i))
  };
}

function getRandomAccordionSection(idx) {
  return {
    header: `Nivå ${idx + 1}`,
    subsections: Array.from({ length: Math.floor(Math.random() * 2) + 1 }, (_, i) => getRandomSubsection(i))
  };
}

export const accordionData = Array.from({ length: 4 }, (_, i) => getRandomAccordionSection(i));
