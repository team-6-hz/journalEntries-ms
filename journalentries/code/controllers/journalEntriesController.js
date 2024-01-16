export async function getEntries(req, res) {
  try {
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
}