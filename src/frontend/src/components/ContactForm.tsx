import { useState } from 'react';
import { useActor } from '../hooks/useActor';
import { MessageType } from '../backend';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';

export default function ContactForm() {
  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    messageType: '' as MessageType | '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.messageType || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!actor) {
      toast.error('Unable to connect to backend');
      return;
    }

    setIsSubmitting(true);

    try {
      await actor.submitContactForm(
        formData.name,
        formData.email,
        formData.messageType as MessageType,
        formData.message
      );

      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out. We\'ll get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        messageType: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message', {
        description: 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-ocean-900 dark:text-ocean-50">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border-ocean-200 dark:border-ocean-800"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-ocean-900 dark:text-ocean-50">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border-ocean-200 dark:border-ocean-800"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="messageType" className="text-ocean-900 dark:text-ocean-50">
          Message Type
        </Label>
        <Select
          value={formData.messageType}
          onValueChange={(value) => setFormData({ ...formData, messageType: value as MessageType })}
        >
          <SelectTrigger id="messageType" className="border-ocean-200 dark:border-ocean-800">
            <SelectValue placeholder="Select a message type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={MessageType.inquiry}>General Inquiry</SelectItem>
            <SelectItem value={MessageType.feedback}>Feedback</SelectItem>
            <SelectItem value={MessageType.request}>Information Request</SelectItem>
            <SelectItem value={MessageType.other}>Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-ocean-900 dark:text-ocean-50">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us what's on your mind..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="min-h-[150px] border-ocean-200 dark:border-ocean-800"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-ocean-500 hover:bg-ocean-600 text-white font-semibold shadow-lg transition-all duration-200"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
