import { Separator } from '@/components/ui/separator'
import UpdateProfileForm from '@/app/(application)/application/my-profile/update-profile-form'

export default function MyProfile() {
    return (
        <main className="container flex flex-col mt-4">
            <div>
                <h3 className="text-lg font-medium">Settings</h3>
                <p className="text-sm text-muted-foreground">
                    This section allows you to modify your profile phone numbers
                    and preferences
                </p>
                <Separator />
            </div>
            <UpdateProfileForm className="w-fit" />
        </main>
    )
}
