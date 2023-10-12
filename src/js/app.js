export default function sorting(data) {
  return data.sort((a, b) => b.health - a.health);
}