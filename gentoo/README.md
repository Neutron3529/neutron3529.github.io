# chroot 命令

```bash
# mount
CHROOT=/mnt/gentoo
mount --types proc /proc $CHROOT/proc
mount --rbind /sys $CHROOT/sys
mount --rbind /dev $CHROOT/dev
mount --bind /run $CHROOT/run
chroot $CHROOT /bin/bash

# umount
CHROOT=/mnt/gentoo
umount $CHROOT/run
umount $CHROOT/dev
umount $CHROOT/sys
umount $CHROOT/proc
umount $CHROOT
```

```bash
mount /me
mount /mnt
mount /tmp
mount /home
mount /var/tmp
```

# 自动登陆（测试中）
```bash
# /etc/inittab
c7:2345:respawn:/sbin/agetty -a neutron --noclear 38400 tty7 linux
# ~/.bash_profile
dbus-run-session startplasma-wayland
```
