'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

interface ActionResult {
  success: boolean;
  message: string;
}

export async function createSuperAdmin(email: string): Promise<ActionResult> {
  if (!email) {
    return { success: false, message: 'E-posta adresi gerekli.' };
  }

  try {
    const usersRef = collection(db, 'users');
    // Check if user already exists
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Potentially update role if user exists but not as superadmin, or just inform
      const existingUser = querySnapshot.docs[0].data();
      if (existingUser.role === 'superadmin') {
        return { success: true, message: `Kullanıcı (${email}) zaten süper admin olarak kayıtlı.` };
      }
      // For simplicity, we'll just return a message. Or you could update the role here.
      return { success: false, message: `Kullanıcı (${email}) zaten mevcut ancak süper admin değil. Rolünü manuel olarak güncelleyebilirsiniz.` };
    }

    // Add new superadmin
    await addDoc(usersRef, {
      email: email,
      role: 'superadmin',
      createdAt: new Date(),
    });
    return { success: true, message: `Süper admin (${email}) başarıyla oluşturuldu.` };
  } catch (error) {
    console.error('Error creating super admin:', error);
    if (error instanceof Error) {
        return { success: false, message: `Süper admin oluşturulurken hata: ${error.message}` };
    }
    return { success: false, message: 'Süper admin oluşturulurken bilinmeyen bir hata oluştu.' };
  }
}
