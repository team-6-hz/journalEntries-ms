export async function getEntries(req, res) {
  try {
    res.status(200).send(tempResponse);
  } catch (err) {
    next(err);
  }
}