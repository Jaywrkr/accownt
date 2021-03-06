import * as storage from 'node-persist';
import { Accownt } from 'types/accownt';
import * as bcrypt from 'bcryptjs';

export async function setPassword(
  userId: Accownt.User['id'],
  pass: Accownt.User['password'] | null
): Promise<void> {
  const user: Accownt.User = await storage.getItem(`user-${userId}`);
  user.password = pass !== null ? await bcrypt.hash(pass, 10) : null;
  await storage.setItem(`user-${userId}`, user);
}
